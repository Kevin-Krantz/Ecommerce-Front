"use server";

import { mongooseConnect } from "@/lib/mongoose";
import Order from "@/models/Order";
import Product from "@/models/Product";
import { revalidatePath } from "next/cache";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SK, {
  apiVersion: "2023-10-16",
});

export default async function checkout(formData: FormData) {
  await mongooseConnect();

  const entries = Object.fromEntries(formData.entries());

  const { name, email, city, postalCode, streetAddress, country } = entries;

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
          currency: "usd",
          product_data: { name: productInfo.title },
          unit_amount: productInfo.price * 100,
        },
      });
    }
  }

  revalidatePath("/cart");

  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email as string,
    success_url: (process.env.PUBLIC_URL as string) + "/cart?success=1",
    cancel_url: (process.env.PUBLIC_URL as string) + "/cart?canceled=1",
    metadata: { orderId: orderDoc._id.toString() },
  });

  return { url: session.url };
}
