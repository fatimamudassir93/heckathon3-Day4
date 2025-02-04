
"use client"; // This line makes the component client-side

import { useComparison } from '@/components/ComparisonContext';
import  ProductCard from '@/components/ProductCard';

const ComparisonPage = () => {
  const { comparisonList, removeFromComparison } = useComparison();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8">Compare Products</h1>

      {comparisonList.length === 0 ? (
        <p className="text-center">No products to compare. Add some products to compare!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisonList.map((product) => (
            <div key={product._id} className="relative">
              <ProductCard product={product} />
              <button
                onClick={() => removeFromComparison(product._id)}
                className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComparisonPage;
