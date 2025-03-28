import { Factory, ShoppingBag, Truck } from "lucide-react";
import React from "react";

const OurServices = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Factory className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Production</h3>
            <p className="text-gray-600">
              Crafting premium ice cream using locally sourced ingredients in
              our state-of-the-art facility.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="text-pink-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Retail</h3>
            <p className="text-gray-600">
              Visit our stores to experience our full range of flavors and watch
              ice cream being made.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Delivery</h3>
            <p className="text-gray-600">
              Enjoy our ice cream at home with our quick and reliable delivery
              service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
