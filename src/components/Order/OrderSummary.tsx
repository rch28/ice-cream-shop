"use client";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { CartItem, DeliveryMethod, useStore } from "@/store/store";

const OrderSummary = ({
  subtotal,
  total,
  cart,
  deliveryMethod,
  setDeliveryMethod,
}: {
  subtotal: number;
  total: number;
  cart: CartItem[];
  deliveryMethod: DeliveryMethod;
  setDeliveryMethod: (value: DeliveryMethod) => void;
}) => {
  const { clearCart } = useStore();
  return (
    <div>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toFixed(2)}</span>
            </div>

            <div>
              <h3 className="font-medium mb-2">Delivery Method</h3>
              <RadioGroup
                value={deliveryMethod}
                onValueChange={(value) =>
                  setDeliveryMethod(value as DeliveryMethod)
                }
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="delivery"
                    id="delivery"
                    className="cursor-pointer "
                  />
                  <Label htmlFor="delivery">Delivery (+100)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pickup" id="pickup" />
                  <Label htmlFor="pickup">Store Pickup (Free)</Label>
                </div>
              </RadioGroup>
            </div>

            {deliveryMethod === "delivery" && (
              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Input id="address" placeholder="Enter your address" />
              </div>
            )}

            <Separator />

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>Rs. {total.toFixed(2)}</span>
            </div>

            <Button
              className="w-full bg-secondary hover:bg-secondary-foreground text-white px-4  font-semibold transition-colors cursor-pointer"
              size="lg"
              disabled={cart.length === 0}
              onClick={() => {
                clearCart();
                alert("Order placed successfully!");
              }}
            >
              Place Order
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSummary;
