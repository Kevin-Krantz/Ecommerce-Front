import { mongooseConnect } from "@/lib/mongoose";
import Order from "@/models/Order";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SK as string, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export async function POST(req: NextRequest) {
  await mongooseConnect();
  const body = await req.text();
  const endpointSecret =
    "whsec_728b2e4cb98195921c40b37ae1837b5af83d4e7a17969286f6d6e9d74340227c";
  const sig = headers().get("stripe-signature") as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return new Response(`Webhook Error: ${err}`, {
      status: 400,
    });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const data = event.data.object;
      const orderId = (data.metadata as Stripe.Metadata).orderId;
      const paid = data.payment_status === "paid";

      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, { paid: true });
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response("GOODIE", {
    status: 200,
  });
}
