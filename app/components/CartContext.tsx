import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

type CartContextType = {
  cartProducts: string[];
  setCartProducts: React.Dispatch<React.SetStateAction<string[]>>;
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
}

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartProducts, setCartProducts] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      const savedCartProducts = localStorage.getItem("cart");
      if (savedCartProducts) {
        setCartProducts(JSON.parse(savedCartProducts));
      }
    }
  }, [isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts, isMounted]);

  const addProduct = useCallback((productId: string) => {
    if (productId) {
      setCartProducts((prev) => [...prev, productId]);
    }
  }, []);

  const removeProduct = useCallback((productId: string) => {
    if (productId) {
      setCartProducts((prev) => {
        const index = prev.indexOf(productId);
        if (index !== -1) {
          const newCartProducts = prev.slice();
          newCartProducts.splice(index, 1);
          return newCartProducts;
        }
        return prev;
      });
    }
  }, []);

  const clearCart = useCallback(() => {
    localStorage.setItem("cart", JSON.stringify([]));
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
