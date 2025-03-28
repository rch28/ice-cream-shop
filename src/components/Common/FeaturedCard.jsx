import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const FeaturedCard = ({ image, name, price }) => {
  return (
    <div className="group cursor-pointer  relative">
      <div className="aspect-square rounded-2xl shadow shadow-gray-200 drop-shadow-2xl overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
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
