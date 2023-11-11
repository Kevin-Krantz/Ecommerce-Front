import { getData } from "@/utils/fetchData";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { featuredProduct, newProducts, allProducts } = await getData();
    return NextResponse.json(
      { featuredProduct, newProducts, allProducts },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(`Webhook Error: ${err}`, {
      status: 500,
    });
  }
}
