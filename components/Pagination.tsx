
'use client'

import { useState } from 'react';
import ProductCard from './ProductCard';

const Pagination = ({ products, totalPages }: { products: any[]; totalPages: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Calculate the products to display based on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      {/* Display products for the current page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {currentProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md font-bold hover:bg-indigo-700 transition"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">{currentPage} / {totalPages}</span>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md font-bold hover:bg-indigo-700 transition"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
