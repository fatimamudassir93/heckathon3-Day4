
import React from "react";
import Link from "next/link";  // Import Link for navigation

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-300 p-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6">
        {/* Company Info */}
        <section className="w-full sm:w-1/3">
          <h2 className="font-bold text-2xl">Furniro.</h2>
          <p className="text-gray-700 mt-2 font-bold">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </section>

        {/* Navigation */}
        <nav className="w-full sm:w-1/4">
          <h4 className="font-semibold text-lg">Navbar</h4>
          <ul className="space-y-2 text-gray-600 mt-2">
            <li>
              <Link href="/" passHref className="text-md font-bold text-gray-600 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" passHref className="text-md font-bold text-gray-600 hover:text-black">
               Shop
              </Link>
            </li>
           
            <li>
              <Link href="/feedback" passHref className="text-md font-bold text-gray-600 hover:text-black">
                FeedBack
              </Link>
              
            </li>
            <li>
              <Link href="/faq" passHref className="text-md font-bold text-gray-600 hover:text-black">
                FAQ
              </Link>
              
            </li>

            
          </ul>
        </nav>

        {/* Help */}
        <nav className="w-full sm:w-1/4">
          <h4 className="font-semibold text-lg">Help</h4>
          <ul className="space-y-2 text-gray-600 mt-2">
            <li className="text-md font-bold text-gray-600 hover:text-black">Payment Option</li>
            <li className="text-md font-bold text-gray-600 hover:text-black">Returns</li>
            <li className="text-md font-bold text-gray-600 hover:text-black">Privacy Policies</li>
          </ul>
        </nav>

        {/* Newsletter */}
        <section className="w-full sm:w-1/4">
          <h4 className="font-semibold text-lg">Newsletter</h4>
          <form className="flex flex-col gap-2 mt-2">
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded p-2"
              aria-label="Your Email"
            />
            <button
              type="submit"
              className="bg-black text-white font-bold p-2 rounded"
            >
              SUBSCRIBE
            </button>
          </form>
        </section>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center">
        <hr className="border-gray-300 mb-3" />
        <p className="text-gray-600">2023 Funiro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

