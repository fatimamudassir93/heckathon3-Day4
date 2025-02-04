
import React from "react";
import Image from "next/image";

const Mid = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl mt-4">Browse The Range</h1>
      <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {["me5.jpg", "me6.jpg", "me7.jpg"].map((src, index) => (
          <Image key={index} height={480} width={381} alt={`Category ${index}`} src={`/${src}`} />
        ))}
      </div>
      <ul className="flex justify-center gap-96 mt-4 font-bold text-gray-700">
        <li>Dining</li>
        <li>Living</li>
        <li>Bedroom</li>
      </ul>
    </div>
  );
};

export default Mid;

