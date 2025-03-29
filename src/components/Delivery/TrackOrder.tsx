import React from "react";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TrackOrder = ({
  orderNumber,
  setOrderNumber,
  handleTrackOrder,
}: {
  orderNumber: string;
  setOrderNumber: (value: string) => void;
  handleTrackOrder: () => void;
}) => {
  return (
    <Card className="min-h-96">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Track Your Order</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="order-number">Order Number</Label>
            <div className="flex gap-2">
              <Input
                id="order-number"
                placeholder="Enter your order number (e.g., ORD-12345)"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
              />
              <Button
                variant="secondary"
                className="text-white cursor-pointer"
                onClick={handleTrackOrder}
              >
                Track
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackOrder;
