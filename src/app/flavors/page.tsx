"use client";
import HeaderText from "@/components/Common/HeaderText";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const categories = [
  {
    name: "Classic Flavors",
    flavors: [
      {
        id: 1,
        name: "Madagascar Vanilla",
        description:
          "Rich and creamy vanilla made with premium Madagascar bourbon vanilla beans",
        price: 499,
        image:
          "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80",
      },
      {
        id: 2,
        name: "Belgian Chocolate",
        description: "Smooth dark chocolate made with imported Belgian cocoa",
        price: 549,
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80",
      },
      {
        id: 3,
        name: "Strawberry Fields",
        description: "Fresh strawberries blended into our creamy base",
        price: 529,
        image:
          "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    name: "Premium Selections",
    flavors: [
      {
        id: 4,
        name: "Salted Caramel Swirl",
        description: "Caramel ice cream with sea salt and caramel ribbons",
        price: 649,
        image:
          "https://images.unsplash.com/photo-1477505982272-ead89926a577?auto=format&fit=crop&q=80",
      },
      {
        id: 5,
        name: "Pistachio Dream",
        description: "Roasted pistachios in our signature cream base",
        price: 699,
        image:
          "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80",
      },
      {
        id: 6,
        name: "Mint Chocolate Symphony",
        description: "Fresh mint with dark chocolate chips",
        price: 599,
        image:
          "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    name: "Seasonal Specials",
    flavors: [
      {
        id: 7,
        name: "Pumpkin Spice",
        description: "Fall favorite with real pumpkin and warm spices",
        price: 649,
        image:
          "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&q=80",
      },
      {
        id: 8,
        name: "Summer Berry Sorbet",
        description: "Refreshing blend of seasonal berries",
        price: 599,
        image:
          "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80",
      },
      {
        id: 9,
        name: "Eggnog Delight",
        description: "Holiday special with nutmeg and cinnamon",
        price: 649,
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80",
      },
    ],
  },
];
const FlavorsPage = () => {
  const { addToCart } = useStore();
  const router = useRouter();
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <HeaderText title="Our Ice Cream Flavors" />

        {categories.map(({ name, flavors }, index) => (
          <div key={index} className="mb-20">
            <h2 className="text-3xl font-bold mb-8">{name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {flavors.map(
                ({ name, image, price, description, id }, flavorIndex) => (
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
                        <span className="text-pink-500 font-bold">
                          Rs.{price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{description}</p>
                      <Button
                        onClick={() => {
                          router.push("/order?tab=2");
                          addToCart({
                            id,
                            name,
                            price,
                            quantity: 1,
                            image,
                          });
                        }}
                        className="w-full bg-secondary hover:bg-secondary-foreground text-white px-4 !py-2 h-10 rounded-full font-semibold transition-colors cursor-pointer"
                      >
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
