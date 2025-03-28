import React from "react";
import FeaturedCard from "../Common/FeaturedCard";
const FeaturedFlavors = () => {
  const featuredItems = [
    {
      name: "Vanilla",
      image:
        "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80",
      price: "Rs. 499",
    },
    {
      name: "Dark Chocolate",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80",
      price: "Rs. 549",
    },
    {
      name: "Strawberry",
      image:
        "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80",
      price: "Rs. 529",
    },
    {
      name: "Mint",
      image:
        "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80",
      price: "Rs. 549",
    },
    {
      name: "Pineapple",
      image:
        "https://images.unsplash.com/photo-1653542773563-afb77b34f21a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGluZWFwcGxlJTIwaWNlJTIwY3JlYW1zfGVufDB8fDB8fHww",
      price: "Rs. 549",
    },
    {
      name: "Coconut",
      image:
        "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80",
      price: "Rs. 549",
    },
    {
      name: "Coffee",
      image:
        "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29mZmVlJTIwaWNlJTIwY3JlYW1zfGVufDB8fDB8fHww",
      price: "Rs. 549",
    },
    {
      name: "Kulfi",
      image:
        "https://plus.unsplash.com/premium_photo-1733306657240-a398488ea835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8S3VsZmklMjBpY2UlMjBjcmVhbXN8ZW58MHx8MHx8fDA%3D",
      price: "Rs. 549",
    },
  ];
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Flavors
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {featuredItems.map(({ name, image, price }, index) => (
            <FeaturedCard key={index} name={name} image={image} price={price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFlavors;
