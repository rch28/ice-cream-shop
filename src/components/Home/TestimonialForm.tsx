import { Star } from "lucide-react";
import React, { useState } from "react";

const TestimonialForm = ({
  setReviews,
}: {
  setReviews: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    review: "",
    rating: 5,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
    setIsSubmitting(true);

    try {
      const newReview = {
        ...formData,
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=faces",
      };

      setReviews((prev) => [...prev, newReview]);
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
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="mt-20 max-w-xl mx-auto">
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
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition-colors"
              placeholder="John Smith"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 text-white font-semibold rounded-lg shadow-md 
                ${
                  isSubmitting ? "bg-pink-300" : "bg-pink-500 hover:bg-pink-600"
                } 
                transition-colors duration-200`}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>

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
