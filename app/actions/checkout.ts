"use server";

import { mongooseConnect } from "@/lib/mongoose";
import Order from "@/models/Order";
import Product from "@/models/Product";
import { revalidatePath } from "next/cache";
import Stripe from "stripe";
import { Error } from "mongoose";

const stripe = new Stripe(process.env.STRIPE_SK, {
  apiVersion: "2023-10-16",
});

export default async function checkout(formData: FormData) {
  await mongooseConnect();

  const entries = Object.fromEntries(formData.entries());
  const { name, email, phone, postalCode, streetAddress, town } = entries;
  const products = (entries.products as string).split(",");

  const uniqueProductIds = [...new Set(products)];
  const productsInfo = await Product.find({ _id: { $in: uniqueProductIds } });

  let line_items = [];
  for (const productId of uniqueProductIds) {
    const productInfo = productsInfo.find(
      (p: any) => p._id.toString() === productId
    );

    const quantity = products.filter((id) => id === productId)?.length || 0;

    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "sek",
          product_data: { name: productInfo.title },
          unit_amount: productInfo.price * 100,
        },
      });
    }
  }

  revalidatePath("/cart");

  try {
    const orderDoc = await Order.create({
      line_items,
      name,
      email,
      phone,
      postalCode,
      streetAddress,
      town,
      paid: false,
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      customer_email: email as string,
      success_url: process.env.PUBLIC_URL + "/cart?success=1",
      cancel_url: process.env.PUBLIC_URL + "/cart?canceled=1",
      metadata: { orderId: orderDoc._id.toString() },
    });

    return { url: session.url };
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      const messages = Object.values(error.errors).map((err) =>
        err.message.toLowerCase()
      );

      return {
        errors: messages,
      };
    }
  }
}
