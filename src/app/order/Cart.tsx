import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CartItem } from "./page";

type propsType = {
  item: CartItem;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
};

const Cart = ({
  item: { id, name, image, price, quantity },
  updateQuantity,
  removeFromCart,
}: propsType) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={80}
            height={80}
            className="rounded-md object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-bold">{name}</h3>
              <span className="font-bold">
                Rs. {(price * quantity).toFixed(2)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full cursor-pointer"
                onClick={() => updateQuantity(id, quantity - 1)}
              >
                <Minus className="h-3 w-3" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="mx-3 w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full cursor-pointer"
                onClick={() => updateQuantity(id, quantity + 1)}
              >
                <Plus className="h-3 w-3 " />
                <span className="sr-only">Increase quantity</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto h-8 w-8 text-destructive cursor-pointer"
                onClick={() => removeFromCart(id)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Remove</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cart;
