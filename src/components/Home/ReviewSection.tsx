import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const ReviewSection = () => {
  const reviews = [
    {
      name: "John Doe",
      review:
        "The best ice cream I've ever tasted! The delivery was quick and the ice cream arrived perfectly frozen. Will definitely order again!",
      rating: 5,
    },
    {
      name: "Bikash Gurung",
      review:
        "Absolutely love the variety of flavors! The ice cream is so creamy and delicious. Highly recommend!",
      rating: 5,
    },
    {
      name: "Sita Bhandari",
      review:
        "Great service and even better ice cream! The delivery was super fast and the flavors are unique.",
      rating: 4,
    },
  ];
  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">What Our Customers Say</h2>
          <Carousel>
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg mx-4"
                >
                  <div className="flex items-center mb-4">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <Star key={i} className="text-yellow-500" size={24} />
                    ))}
                  </div>
                  <p className="text-lg font-semibold mb-4">{review.name}</p>
                  <p className="text-gray-600 mb-4">{review.review}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer hover:bg-yellow-200" />
            <CarouselNext className="cursor-pointer hover:bg-yellow-200" />
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default ReviewSection;
