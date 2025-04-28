"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Reviews() {
  const t = useTranslations("Reviews");

  const reviews = [
    {
      id: 1,
      name: t("review_1_name"),
      position: t("review_1_position"),
      text: t("review_1_text"),
      avatar: "/home/review1.webp"
    },
    {
      id: 2,
      name: t("review_2_name"),
      position: t("review_2_position"),
      text: t("review_2_text"),
      avatar: "/home/review2.webp"
    },
    {
      id: 3,
      name: t("review_3_name"),
      position: t("review_3_position"),
      text: t("review_3_text"),
      avatar: "/home/review3.webp"
    },
    {
      id: 4,
      name: t("review_4_name"),
      position: t("review_4_position"),
      text: t("review_4_text"),
      avatar: "/home/review4.webp"
    },
    {
      id: 5,
      name: t("review_5_name"),
      position: t("review_5_position"),
      text: t("review_5_text"),
      avatar: "/home/review5.webp"
    }
  ];

  // Add custom animations to Tailwind config
  const fadeIn = `@keyframes fadeIn {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
  `;
  
  useEffect(() => {
    // Add the animation styles to the document
    const style = document.createElement('style');
    style.textContent = fadeIn;
    document.head.appendChild(style);
    
    return () => {
      // Clean up on unmount
      document.head.removeChild(style);
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(2);
  const [animating, setAnimating] = useState(false);

  const handleReviewClick = (index) => {
    if (index !== activeIndex && !animating) {
      setAnimating(true);
      setActiveIndex(index);
      // Reset animation flag after transition completes
      setTimeout(() => setAnimating(false), 500);
    }
  };

  return (
    <main className="w-full max-w-5xl mx-auto py-8 md:py-12 lg:py-16 px-4 relative space-y-4 md:space-y-5">
      <h1 className="textNormal5 text-center text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
        {t("heading")}
      </h1>
      
      {/* Review section */}
      <div className="bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8 mb-4 md:mb-8 relative overflow-hidden">
        <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 text-3xl sm:text-4xl font-serif text-gray-800">
          "
        </div>
        <div 
          key={activeIndex} 
          className="animate-fadeIn transition-all duration-500 ease-in-out"
        >
          <p className="text-gray-700 text-base sm:text-lg mt-4 sm:mt-6 mb-4 sm:mb-6 pl-4 sm:pl-6 relative">
            {reviews[activeIndex].text}
          </p>
        </div>
      </div>
      
      {/* User avatars section - Scrollable on mobile */}
      <div className="flex overflow-x-auto pb-4 md:pb-0 md:overflow-visible md:justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
        {reviews.map((review, index) => (
          <div key={review.id} className="flex-shrink-0">
            {index === activeIndex ? (
              <button
                onClick={() => handleReviewClick(index)}
                className="py-2 px-4 flex items-center gap-2 sm:gap-3 focus:outline-none transition-all duration-300 scale-110 transform"
                aria-label={`View review from ${review.name}`}
              >
                <div className="relative w-16 h-16 sm:w-16 sm:h-16">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="w-48 h-48 rounded-full object-cover border-2 border-blue-500 animate-pulse shadow-lg"
                    loading="eager"
                    priority
                  />
                </div>
                <div className="line-clamp-2 max-w-[200px] max-sm:max-w-[150px] flex flex-col animate-fadeIn">
                  <h3 className="font-medium text-gray-900 text-left text-sm sm:text-base">
                    {review.name}
                  </h3>
                  {/* <p className="text-gray-600 text-left text-xs sm:text-sm">
                    {review.position}
                  </p> */}
                </div>
              </button>
            ) : (
              <button
                onClick={() => handleReviewClick(index)}
                className="opacity-60 hover:opacity-80 hover:scale-105 transition-all duration-300 focus:outline-none transform"
                aria-label={`View review from ${review.name}`}
              >
                <div className="relative w-14 h-14 sm:w-14 sm:h-14">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="w-48 h-48 rounded-full object-cover border-2 border-transparent hover:border-gray-300"
                    loading="eager"
                  />
                </div>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Indicator dots for mobile (optional) */}
      <div className="flex justify-center mt-2 md:hidden">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => handleReviewClick(index)}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </main>
  );
}