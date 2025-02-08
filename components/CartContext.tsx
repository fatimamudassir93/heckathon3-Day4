
// "use client";

// import { createContext, useContext, useState, ReactNode, useMemo } from "react";

// type Product = {
//   id: string;
//   name: string;
//   price: string;
//   image: string;
//   quantity: number;
// };

// type CartContextType = {
//   cart: Product[];
//   cartCount: number;
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: string) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   clearCart: () => void;
// };

// export const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   // Memoize cartCount to optimize performance and ensure it updates when the cart changes
//   const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id: string, quantity: number) => {
//     setCart((prevCart) =>
//       prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         cartCount,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };


"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";

// Define the cart item type
type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

// Define the CartContext type
type CartContextType = {
  cart: Product[];
  cartCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

// Create the CartContext
const CartContext = createContext<CartContextType | null>(null);

// CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Calculate cart item count
  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product from cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update product quantity
  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
