import { getData, getProductById } from "@/utils/fetchData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const productId = url.searchParams.get("id");

    if (productId) {
      const product = await getProductById(productId);
      return NextResponse.json(product, { status: 200 });
    }

    const { featuredProduct, newProducts, allProducts } = await getData();

    return NextResponse.json(
      { featuredProduct, newProducts, allProducts },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(`Error: ${err}`, { status: 500 });
  }
}
