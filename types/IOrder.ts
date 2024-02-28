import { Document } from "mongoose";

export interface IOrder extends Document {
  line_items: object;
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  streetAddress: string;
  town: string;
  paid: boolean;
}
