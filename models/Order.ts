import { Schema, model, Model, models } from "mongoose";
import { IOrder } from "@/types/IOrder";

const OrderSchema = new Schema<IOrder>(
  {
    line_items: Object,
    name: String,
    email: String,
    city: String,
    postalCode: String,
    streetAddress: String,
    country: String,
    paid: Boolean,
  },
  {
    timestamps: true,
  }
);

let Order: Model<IOrder>;

Order = models.Order
  ? (Order = model<IOrder>("Order"))
  : (Order = model<IOrder>("Order", OrderSchema));

export default Order;
