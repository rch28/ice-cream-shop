"use client";

import { useState } from "react";

import { CheckCircle2, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import HeaderText from "@/components/Common/HeaderText";
import DeliveryDetail from "@/components/Delivery/DeliveryDetail";

import OrderSummaryCard from "@/components/Delivery/OrderSummary";
import TrackOrder from "@/components/Delivery/TrackOrder";
import TrackDelivery from "@/components/Delivery/TrackDelivery";

// Mock order data
export const mockOrder = {
  id: "ORD-12345",
  date: "March 28, 2025",
  status: "out-for-delivery",
  estimatedDelivery: "Today, 3:30 PM - 4:00 PM",
  address: "123 Ice Cream Lane, Frostville, CA 90210",
  items: [
    { name: "Vanilla Bean", quantity: 2, price: 499 },
    { name: "Chocolate Fudge", quantity: 1, price: 549 },
    { name: "Strawberry Swirl", quantity: 1, price: 529 },
  ],
  total: 2076,
  deliveryFee: 100,
  driver: {
    name: "John",
    vehicle: "White Van",
    phone: "555-123-4567",
    image:
      "https://images.unsplash.com/photo-1593035013811-2db9b3c36980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyaXZlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
};

const DeliveryTrackingPage = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [isTracking, setIsTracking] = useState(true);

  const handleTrackOrder = () => {
    if (orderNumber.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <div className="container px-4 py-12 mx-auto max-w-4xl">
      <div className="flex items-center mb-8">
        <HeaderText title="Delivery Tracking" />
      </div>
      {!isTracking ? (
        <TrackOrder
          orderNumber={orderNumber}
          setOrderNumber={setOrderNumber}
          handleTrackOrder={handleTrackOrder}
        />
      ) : (
        <div className="space-y-6">
          <TrackDelivery setIsTracking={setIsTracking} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DeliveryDetail
              address={mockOrder.address}
              estimatedDelivery={mockOrder.estimatedDelivery}
              driver={mockOrder.driver}
            />
            {/* Order summary */}
            <OrderSummaryCard />
          </div>
        </div>
      )}
    </div>
  );
};
export default DeliveryTrackingPage;
