'use client';

import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  isNew?: boolean;
  tags: string[];
  imageUrl: string;
}

const ProductList = ({ products, productsPerPage, totalPages }: { products: Product[], productsPerPage: number, totalPages: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p>No products found in this price range.</p>
      )}
    </div>
  );
};

export default ProductList;
