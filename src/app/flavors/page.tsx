import { Button } from "@/components/ui/button";
import Image from "next/image";

const FlavorsPage = () => {
  const categories = [
    {
      name: "Classic Flavors",
      flavors: [
        {
          name: "Madagascar Vanilla",
          description:
            "Rich and creamy vanilla made with premium Madagascar bourbon vanilla beans",
          price: "Rs. 499",
          image:
            "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80",
        },
        {
          name: "Belgian Chocolate",
          description: "Smooth dark chocolate made with imported Belgian cocoa",
          price: "Rs. 549",
          image:
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80",
        },
        {
          name: "Strawberry Fields",
          description: "Fresh strawberries blended into our creamy base",
          price: "Rs. 529",
          image:
            "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80",
        },
      ],
    },
    {
      name: "Premium Selections",
      flavors: [
        {
          name: "Salted Caramel Swirl",
          description: "Caramel ice cream with sea salt and caramel ribbons",
          price: "Rs. 649",
          image:
            "https://images.unsplash.com/photo-1477505982272-ead89926a577?auto=format&fit=crop&q=80",
        },
        {
          name: "Pistachio Dream",
          description: "Roasted pistachios in our signature cream base",
          price: "Rs. 699",
          image:
            "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80",
        },
        {
          name: "Mint Chocolate Symphony",
          description: "Fresh mint with dark chocolate chips",
          price: "Rs. 599",
          image:
            "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80",
        },
      ],
    },
    {
      name: "Seasonal Specials",
      flavors: [
        {
          name: "Pumpkin Spice",
          description: "Fall favorite with real pumpkin and warm spices",
          price: "Rs. 649",
          image:
            "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&q=80",
        },
        {
          name: "Summer Berry Sorbet",
          description: "Refreshing blend of seasonal berries",
          price: "Rs. 599",
          image:
            "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80",
        },
        {
          name: "Eggnog Delight",
          description: "Holiday special with nutmeg and cinnamon",
          price: "Rs. 649",
          image:
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80",
        },
      ],
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">
          Our Ice Cream Flavors
        </h1>

        {categories.map(({ name, flavors }, index) => (
          <div key={index} className="mb-20">
            <h2 className="text-3xl font-bold mb-8">{name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {flavors.map(
                ({ name, image, price, description }, flavorIndex) => (
                  <div
                    key={flavorIndex}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                  >
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={image}
                        alt={name}
                        width={500}
                        height={500}
                        priority
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{name}</h3>
                        <span className="text-pink-500 font-bold">{price}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{description}</p>
                      <Button className="w-full bg-secondary hover:bg-secondary-foreground text-white px-4 !py-2 h-10 rounded-full font-semibold transition-colors cursor-pointer">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FlavorsPage;
