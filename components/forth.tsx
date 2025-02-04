
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";


const Forth = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl mt-4">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-10 mt-6">
        {["me8.jpg", "me3.jpg", "me4.jpg", "me5.jpg"].map((src, index) => (
          <Image key={index} height={150} width={150} alt={`Product ${index}`} src={`/${src}`} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-6">
        {["me9.png", "me1.jpg", "me7.jpg", "me9.png"].map((src, index) => (
          <Image key={index} height={150} width={150} alt={`Product ${index}`} src={`/${src}`} />
        ))}
      </div>
      <div className="mt-5">
        <Link href="/shop">
        <Button className="text-[#B88E2F] bg-white border border-[#B88E2F] rounded">
          Explore More
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Forth;



