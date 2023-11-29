import { useState, useEffect } from "react";
import { IProduct } from "@/types/IProduct";
import axios from "axios";

export const useProduct = (productId: string) => {
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const getProduct = async (productId: string) => {
      try {
        const result = await axios.get(`/api/products?id=${productId}`);
        setProduct(result.data.product);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    getProduct(productId);
  }, []);

  return { product };
};
