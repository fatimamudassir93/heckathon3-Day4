"use client"; // Use client-side rendering

import { createContext, useContext, useState, ReactNode } from "react";

type Product = {
  _id: string; // Use _id to keep it consistent
  title: string;
  price: number;
  description: string;
  imageUrl: string;
};

type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item._id === product._id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
