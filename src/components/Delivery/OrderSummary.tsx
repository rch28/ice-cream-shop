import React from "react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { mockOrder } from "@/app/data/mockOrder";

const OrderSummaryCard = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-4">Order Summary</h3>
        <div className="space-y-4">
          {mockOrder.items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>
                {item.quantity}x {item.name}
              </span>
              <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <Separator />
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>
              Rs. {(mockOrder.total - mockOrder.deliveryFee).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>Rs. {mockOrder.deliveryFee.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>Rs .{mockOrder.total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummaryCard;
