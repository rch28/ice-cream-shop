import React from "react";

const FeaturedCard = ({ image, name, price }) => {
  return (
    <div className="group cursor-pointer ">
      <div className="aspect-square rounded-2xl shadow shadow-gray-200 drop-shadow-2xl overflow-hidden mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-pink-600 font-semibold">{price}</p>
    </div>
  );
};

export default FeaturedCard;
