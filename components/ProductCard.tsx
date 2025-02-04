
import Link from 'next/link';
import { useWishlist } from '@/components/WishlistContext'; // Import WishlistContext
import { useComparison } from '@/components/ComparisonContext'; // Import ComparisonContext

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

const ProductCard = ({ product }: { product: Product }) => {
  const { addToWishlist } = useWishlist(); // Get the addToWishlist function from context
  const { addToComparison } = useComparison(); // Get the addToComparison function from context

  return (
    <Link href={`/product/${product._id}`}>
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 border border-gray-200 hover:border-indigo-500 relative overflow-hidden cursor-pointer">
        <div className="relative">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-64 object-cover rounded-lg transition duration-300 hover:opacity-90"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
              New
            </span>
          )}
          {product.discountPercentage && (
            <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
              -{product.discountPercentage}%
            </span>
          )}
        </div>
        <div className="mt-5 text-center">
          <h2 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition">
            {product.title}
          </h2>
          <p className="text-red-500 text-sm mt-2 px-2 font-bold">
            {product.description.substring(0, 80)}...
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 mt-4">
          <span className="text-xl font-extrabold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          {product.discountPercentage && (
            <span className="text-sm text-gray-500 line-through">
              ${(
                product.price /
                (1 - product.discountPercentage / 100)
              ).toFixed(2)}
            </span>
          )}
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 justify-center mt-3">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-indigo-400 to-purple-500 text-slate-800 px-3 py-1 text-xs font-semibold rounded-full shadow-md hover:scale-110 transition"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Add to Wishlist Button */}
        <div className="mt-6 text-center">
          <button
            onClick={(e) => {
              e.preventDefault();  // Prevent navigation to product page
              addToWishlist(product);  // Add product to wishlist
            }}
            className="bg-pink-600 text-white px-4 py-2 rounded-md font-bold hover:bg-pink-700 transition"
          >
            Add to Wishlist
          </button>
        </div>

        {/* Add to Comparison Button */}
        <div className="mt-3 text-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToComparison(product);
            }}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md font-bold hover:bg-yellow-600 transition"
          >
            Add to Compare
          </button>
        </div>

        
      </div>
    </Link>
  );
};

export default ProductCard;
