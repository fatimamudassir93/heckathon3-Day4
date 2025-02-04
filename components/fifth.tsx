




import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Fifth = () => {
  return (
    <div className="bg-[#FCF8F3] flex flex-col md:flex-row items-center md:items-start md:pl-20 pb-16">
      <div className="text-center md:text-left pt-10">
        <h1 className="text-2xl font-bold">50+ Beautiful Rooms</h1>
        <h1 className="text-2xl font-bold">Inspirations</h1>
        <p className="mt-3 text-gray-700">
          Our designer already made a lot of beautiful <br />
          prototypes of rooms that inspire you.
        </p>
       <Link href='/shop'> <Button className="text-white bg-[#B88E2F] mt-5">Explore More</Button></Link>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10 md:mt-0 md:pl-20">
        <Image height={486} width={372} alt="Room 1" src="/me1.jpg" />
        <Image height={486} width={372} alt="Room 2" src="/me2.jpg" />
        <Image height={486} width={372} alt="Room 2" src="/me8.jpg" />

      </div>
    </div>
  );
};

export default Fifth;
