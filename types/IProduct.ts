import { Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  price: number;
  description?: string;
  images?: string[];
  category?: string;
  properties?: { [key: string]: any };
  _id: string;
}
