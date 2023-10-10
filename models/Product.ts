import { IProduct } from "@/types/IProduct";
import mongoose, { Schema, model, Model, models } from "mongoose";

const ProductSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    images: [{ type: String }],
    category: { type: mongoose.Types.ObjectId, ref: "Category" },
    properties: { type: Object },
  },
  {
    timestamps: true,
  }
);

let Product: Model<IProduct>;

Product = models.Product
  ? (Product = model<IProduct>("Product"))
  : (Product = model<IProduct>("Product", ProductSchema));

export default Product;
