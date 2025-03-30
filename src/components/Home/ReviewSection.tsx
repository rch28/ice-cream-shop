"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";
import TestimonialForm from "./TestimonialForm";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      review:
        "The best ice cream I've ever tasted! The delivery was quick and the ice cream arrived perfectly frozen. Will definitely order again!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
      title: "Food Enthusiast",
    },
    {
      name: "Bikash Gurung",
      review:
        "Absolutely love the variety of flavors! The ice cream is so creamy and delicious. Highly recommend!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
      title: "Ice Cream Connoisseur",
    },
    {
      name: "Sita Bhandari",
      review:
        "Great service and even better ice cream! The delivery was super fast and the flavors are unique.",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
      title: "Regular Customer",
    },
  ]);
  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className=" w-4/5 md:max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">What Our Customers Say</h2>
          <Carousel>
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col items-center justify-center p-2 bg-white  mx-4"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg mx-4 transform transition-all duration-300 hover:shadow-xl">
                    <div className="relative mb-6">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={150}
                        height={150}
                        priority
                        className="w-16 h-16 rounded-full object-cover border-4 border-pink-100"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{review.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{review.title}</p>
                    <div className="flex items-center mb-6">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-current"
                          size={20}
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 italic relative px-6">
                      <span className="text-4xl text-pink-200 absolute top-0 left-0">
                        &ldquo;
                      </span>
                      <p className="mt-2">{review.review}</p>
                      <span className="text-4xl text-pink-200 absolute bottom-0 right-0">
                        &ldquo;
                      </span>
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer hover:bg-yellow-200" />
            <CarouselNext className="cursor-pointer hover:bg-yellow-200" />
          </Carousel>

          {/* Testimonial Form */}
          <TestimonialForm setReviews={setReviews} />
        </div>
      </section>
    </>
  );
};

export default ReviewSection;
