import { Schema, model, Model, models } from "mongoose";
import { IOrder } from "@/types/IOrder";
import validator from "validator";

const OrderSchema = new Schema<IOrder>(
  {
    line_items: { type: Object, required: true },
    name: {
      type: String,
      required: [true, "Vänligen fyll ditt namn & efternamn"],
    },
    email: {
      type: String,
      required: [true, "Vänligen fyll i din E-post"],
      validate: [validator.isEmail, "Ogiltligt E-post format"],
    },
    phone: {
      type: String,
      required: [true, "Vänligen fyll i ditt mobilnummer"],
    },
    postalCode: {
      type: String,
      required: [true, "Vänligen fyll i ditt postnummer"],
    },
    streetAddress: {
      type: String,
      required: [true, "Vänligen fyll i din adress"],
    },
    town: { type: String, required: [true, "Vänligen fyll i din postort"] },
    paid: { type: Boolean, required: true },
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
