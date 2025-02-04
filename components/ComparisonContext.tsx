"use client"

import { createContext, useContext, useState } from 'react';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ComparisonContextProps {
  comparisonList: Product[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (productId: string) => void;
}

const ComparisonContext = createContext<ComparisonContextProps | undefined>(undefined);

export const ComparisonProvider = ({ children }: { children: React.ReactNode }) => {
  const [comparisonList, setComparisonList] = useState<Product[]>([]);

  const addToComparison = (product: Product) => {
    setComparisonList((prev) => [...prev, product]);
  };

  const removeFromComparison = (productId: string) => {
    setComparisonList((prev) => prev.filter((product) => product._id !== productId));
  };

  return (
    <ComparisonContext.Provider value={{ comparisonList, addToComparison, removeFromComparison }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = (): ComparisonContextProps => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};
