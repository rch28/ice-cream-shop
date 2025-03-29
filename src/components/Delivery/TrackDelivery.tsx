import { CheckCircle2, Truck } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { mockOrder } from "@/app/data/mockOrder";

const TrackDelivery = ({
  setIsTracking,
}: {
  setIsTracking: (value: boolean) => void;
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold">Order #{mockOrder.id}</h2>
            <p className="text-muted-foreground">Placed on {mockOrder.date}</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsTracking(false)}
            className="cursor-pointer"
          >
            Track Another Order
          </Button>
        </div>

        <div className="mt-6">
          <h3 className="font-medium mb-2">Delivery Status</h3>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-muted" />

            <div className="relative pl-10 pb-8">
              <div className="absolute left-0 rounded-full bg-secondary p-1">
                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
              </div>
              <h4 className="font-medium">Order Confirmed</h4>
              <p className="text-sm text-muted-foreground">
                March 28, 2025, 10:15 AM
              </p>
            </div>

            <div className="relative pl-10 pb-8">
              <div className="absolute left-0 rounded-full bg-secondary p-1">
                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
              </div>
              <h4 className="font-medium">Preparing Your Order</h4>
              <p className="text-sm text-muted-foreground">
                March 28, 2025, 10:30 AM
              </p>
            </div>

            <div className="relative pl-10 pb-8">
              <div className="absolute left-0 rounded-full bg-secondary p-1">
                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
              </div>
              <h4 className="font-medium">Order Packed</h4>
              <p className="text-sm text-muted-foreground">
                March 28, 2025, 11:45 AM
              </p>
            </div>

            <div className="relative pl-10 pb-8">
              <div className="absolute left-0 rounded-full bg-secondary p-1">
                <Truck className="h-4 w-4 text-primary-foreground" />
              </div>
              <h4 className="font-medium">Out for Delivery</h4>
              <p className="text-sm text-muted-foreground">
                March 28, 2025, 2:00 PM
              </p>
              <p className="text-sm font-medium mt-1">
                Your ice cream is on its way!
              </p>
            </div>

            <div className="relative pl-10">
              <div className="absolute left-0 rounded-full bg-muted p-1">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
              </div>
              <h4 className="font-medium">Delivered</h4>
              <p className="text-sm text-muted-foreground">
                Estimated: {mockOrder.estimatedDelivery}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackDelivery;
