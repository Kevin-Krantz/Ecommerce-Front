import { Document } from "mongoose";

export interface IOrder extends Document {
  line_items: object;
  name: string;
  email: string;
  city: string;
  postalCode: string;
  streetAddress: string;
  country: string;
  paid: boolean;
}
