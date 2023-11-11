import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await mongooseConnect();
  const { ids } = await req.json();
  return NextResponse.json(await Product.find({ _id: ids }));
}
