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
