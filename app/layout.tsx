


// import { CartProvider } from "@/components/CartContext"; // Ensure the path is correct
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
//  import "./globals.css";



// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <CartProvider> {/* Wrapping the application with CartProvider */}
//           <Navbar />
//           <main>{children}</main> {/* Wrap children in a <main> tag for better semantics */}
//           <Footer />
//         </CartProvider>
//       </body>
//     </html>
//   );
// }











// import { CartProvider } from "@/components/CartContext"; // Ensure the path is correct
// import { WishlistProvider } from "@/components/WishlistContext"; // Ensure the path is correct for WishlistContext
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import "./globals.css";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         {/* Wrapping the application with both CartProvider and WishlistProvider */}
//         <CartProvider>
//           <WishlistProvider>  {/* Wrapping with WishlistProvider */}
//             <Navbar />
//             <main>{children}</main> {/* Wrap children in a <main> tag for better semantics */}
//             <Footer />
//           </WishlistProvider>
//         </CartProvider>
//       </body>
//     </html>
//   );
// }




// RootLayout.tsx
import { CartProvider } from "@/components/CartContext"; // Ensure the path is correct
import { WishlistProvider } from "@/components/WishlistContext"; // Ensure the path is correct for WishlistContext
import { ComparisonProvider } from "@/components/ComparisonContext"; // Add ComparisonContext

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css"; // Global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Wrapping the application with CartProvider, WishlistProvider, and ComparisonProvider */}
        <CartProvider>
          <WishlistProvider>
            <ComparisonProvider>
              <Navbar />
              <main>{children}</main> {/* Wrap children in a <main> tag for better semantics */}
              <Footer />
            </ComparisonProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
