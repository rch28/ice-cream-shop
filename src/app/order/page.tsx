"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderSummary from "@/components/Order/OrderSummary";
import Cart from "./Cart";
import { useStore } from "@/store/store";
import HeaderText from "@/components/Common/HeaderText";
import { Suspense } from "react";

// Mock data for ice cream flavors
const flavors = [
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
];

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const OrderPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderContent />
    </Suspense>
  );
};
const OrderContent = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    deliveryMethod,
    setDeliveryMethod,
  } = useStore();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = deliveryMethod === "delivery" ? 100 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="flex items-center mb-8">
        <HeaderText title="Order Ice Cream" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Tabs */}
          <Tabs
            defaultValue={tab === "2" ? "cart" : "flavors"}
            className="w-full"
          >
            {/* list */}
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="flavors" className="cursor-pointer">
                Choose Flavors
              </TabsTrigger>
              <TabsTrigger value="cart" className="cursor-pointer">
                Your Cart ({cart.length})
              </TabsTrigger>
            </TabsList>
            {/* Contents */}
            <TabsContent value="flavors" className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {flavors.map((flavor) => (
                  <Card
                    key={flavor.id}
                    className="overflow-hidden shadow-gray-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <Image
                          src={flavor.image || "/placeholder.svg"}
                          alt={flavor.name}
                          width={80}
                          height={80}
                          priority
                          className="rounded-md object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-bold">{flavor.name}</h3>
                            <span className="font-bold">
                              RS . {flavor.price}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                            {flavor.description}
                          </p>
                          <Button
                            onClick={() =>
                              addToCart({ ...flavor, quantity: 1 })
                            }
                            size="lg"
                            className="mt-2 bg-secondary hover:bg-secondary-foreground text-white px-4 rounded-full font-semibold transition-colors cursor-pointer"
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="cart" className="mt-4">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">
                    Your cart is empty
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Add some delicious ice cream to get started
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <Cart
                      key={item.id}
                      item={item}
                      updateQuantity={updateQuantity}
                      removeFromCart={removeFromCart}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <OrderSummary
          total={total}
          subtotal={subtotal}
          cart={cart}
          deliveryMethod={deliveryMethod}
          setDeliveryMethod={setDeliveryMethod}
        />
      </div>
    </div>
  );
};

export default OrderPage;
