import { useState, useEffect } from "react";
import { IProduct } from "@/types/IProduct";
import axios from "axios";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [featured, setFeatured] = useState<IProduct | null>(null);
  const [allProducts, setAllProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get("/api/customProducts");
        setFeatured(result.data.featuredProduct);
        setProducts(result.data.newProducts);
        setAllProducts(result.data.allProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return { allProducts, products, featured };
};
