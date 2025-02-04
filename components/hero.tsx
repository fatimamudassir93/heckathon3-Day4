
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-bannerImg relative bg-repeat bg-cover bg-bottom w-full h-screen flex items-center">
      <div className="absolute right-12 top-36 bg-[#FFF3E3] p-8 rounded-lg shadow-lg">
        <h4 className="font-bold text-lg">New Arrival</h4>
        <h1 className="text-3xl text-[#B88E2F] font-semibold">Discover Our</h1>
        <h1 className="text-4xl mb-3 font-bold text-[#B88E2F]">New Collection</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Numquam quo, ipsa expedita eius voluptate.
        </p>
        <Link href="/shop">
        <Button className="text-white bg-[#B88E2F] mt-5">

          Buy Now</Button></Link>
      </div>
    </section>
  );
};

export default Hero;

