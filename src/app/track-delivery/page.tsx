"use client";

import { useState } from "react";

import HeaderText from "@/components/Common/HeaderText";
import DeliveryDetail from "@/components/Delivery/DeliveryDetail";

import OrderSummaryCard from "@/components/Delivery/OrderSummary";
import TrackOrder from "@/components/Delivery/TrackOrder";
import TrackDelivery from "@/components/Delivery/TrackDelivery";
import { mockOrder } from "../data/mockOrder";

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
