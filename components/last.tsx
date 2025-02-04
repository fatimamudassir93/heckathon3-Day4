
import React from "react";
import Image from "next/image";

const Last = () => {
  return (
    <div className="w-full">
      {/* Full-width responsive image */}
      <Image 
        height={780} 
        width={1799} 
        alt="Share Section" 
        src="/Share.png" 
        className="w-full h-auto" 
        priority 
      />
    </div>
  );
};

export default Last;
