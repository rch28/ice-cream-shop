import React from "react";

const test = () => {
  return (
    <div>
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
          required
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
    </div>
  );
};

export default test;
