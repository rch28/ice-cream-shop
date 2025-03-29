import React from "react";
import { Card, CardContent } from "../ui/card";
import { Clock, MapPin } from "lucide-react";
import HeaderText from "../Common/HeaderText";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Button } from "../ui/button";

type propsType = {
  address: string;
  estimatedDelivery: string;
  driver: {
    name: string;
    image: string;
    vehicle: string;
    phone: string;
  };
};
const DeliveryDetail = ({ address, estimatedDelivery, driver }: propsType) => {
  return (
    <Card>
      <CardContent className="p-6">
        <HeaderText title="Delivery Details" className="mb-6" />
        <div className="space-y-4">
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
            <div>
              <h4 className="font-medium">Delivery Address</h4>
              <p className="text-muted-foreground">{address}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
            <div>
              <h4 className="font-medium">Estimated Delivery Time</h4>
              <p className="text-muted-foreground">{estimatedDelivery}</p>
            </div>
          </div>
          <Separator />
          <div>
            <h4 className="font-medium mb-2">Your Delivery Driver</h4>
            <div className="flex items-center gap-3">
              <Image
                src={driver.image || "/placeholder.svg"}
                alt={driver.name}
                width={100}
                height={100}
                priority
                className="rounded-full w-16 h-16 object-cover"
              />
              <div>
                <p className="font-medium">{driver.name}</p>
                <p className="text-sm text-muted-foreground">
                  {driver.vehicle}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="ml-auto cursor-pointer"
              >
                Call Driver
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliveryDetail;
