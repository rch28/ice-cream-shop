import { Factory, ShoppingBag, Truck } from "lucide-react";
import React from "react";
import ServiceCard from "@/components/Common/ServiceCard";

const OurServices = () => {
  const services = [
    {
      title: "Production",
      description:
        "Crafting premium ice cream using locally sourced ingredients in our state-of-the-art facility.",
      icon: <Factory className="text-blue-600" size={32} />,
    },
    {
      title: "Retail",
      description:
        "Visit our stores to experience our full range of flavors and watch ice cream being made.",
      icon: <ShoppingBag className="text-pink-600" size={32} />,
    },
    {
      title: "Delivery",
      description:
        "Enjoy our ice cream at home with our quick and reliable delivery service.",
      icon: <Truck className="text-purple-600" size={32} />,
    },
  ];
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ title, description, icon }, i) => (
            <ServiceCard
              key={`${title}-${i}`}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
