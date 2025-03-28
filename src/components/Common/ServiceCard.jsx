import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
