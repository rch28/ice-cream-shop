import { Star } from "lucide-react";
import React, { useState } from "react";

type Review = {
  name: string;
  review: string;
  rating: number;
  avatar: string;
  title: string;
};
const TestimonialForm = ({
  setReviews,
}: {
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    review: "",
    rating: 5,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState("");
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (newRating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating: newRating,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.review ||
      !formData.title ||
      !formData.rating
    ) {
      setErrors("Please fill in all fields.");
      setTimeout(() => setErrors(""), 4000);
      return;
    }
    setIsSubmitting(true);

    try {
      const newReview = {
        ...formData,
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=faces",
      };

      setReviews((prev) => [newReview, ...prev]);

      setFormData({
        name: "",
        title: "",
        review: "",
        rating: 5,
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setErrors("");
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="mt-20 max-w-xl mx-auto z-10 relative">
        <h3 className="text-2xl font-bold mb-8">Share Your Experience</h3>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-left text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-colors"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-left text-sm font-medium text-gray-700 mb-1"
            >
              Your Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-colors"
              placeholder="Ice Cream Enthusiast"
            />
          </div>
          <div>
            <label
              htmlFor="review"
              className="block text-left text-sm font-medium text-gray-700 mb-1"
            >
              Your Review
            </label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-colors"
              placeholder="Share your experience with our ice cream..."
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= formData.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-200 fill-current"
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 text-white font-semibold rounded-full shadow-md  cursor-pointer
                ${
                  isSubmitting
                    ? "bg-pink-300"
                    : "bg-secondary hover:bg-secondary-foreground"
                } 
                transition-colors duration-200`}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
          {errors && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {errors}
            </div>
          )}
          {showSuccess && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
              Thank you for your review! It has been added successfully.
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default TestimonialForm;
