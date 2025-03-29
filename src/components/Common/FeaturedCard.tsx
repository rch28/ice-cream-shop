import Image from "next/image";
import React from "react";

const FeaturedCard = ({
  image,
  name,
  price,
}: {
  image: string;
  name: string;
  price: string;
}) => {
  return (
    <div className="group cursor-pointer  relative">
      <div className="aspect-square rounded-2xl shadow-md shadow-gray-300 drop-shadow-2xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          priority
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg black font-semibold ">{name}</h3>
        <p className="text-secondary font-bold">{price}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
