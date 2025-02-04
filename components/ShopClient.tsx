
'use client';

import React, { useState } from "react";
import PriceFilter from "@/components/PriceFilter";
import Pagination from "@/components/Pagination";

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

const ShopClient = ({ products, productsPerPage, totalPages }: { products: Product[], productsPerPage: number, totalPages: number }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle filter changes
  const handleFilterChange = (priceRange: [number, number]) => {
    const [minPrice, maxPrice] = priceRange;
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto px-6">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
        <span className="text-indigo-600">Premium</span> Collection
      </h1>

      {/* Price Filter - Below the header */}
      <div className="mb-2 ">
        <PriceFilter onFilterChange={handleFilterChange} />
      </div>

      {/* Product List with Pagination */}
      {/* <ProductList products={filteredProducts} productsPerPage={productsPerPage} totalPages={totalPages} /> */}

      {/* Pagination component */}
      <Pagination products={filteredProducts} totalPages={totalPages} />
    </div>
  );
};

export default ShopClient;
