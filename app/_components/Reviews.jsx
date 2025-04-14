"use client";

import React, { useState, useEffect, useMemo } from "react";

export default function Reviews() {
  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "Отабек Тажиев",
      position: "Otabek Buildings",
      text: "Мы получили невероятный опыт работы с ними и были впечатлены тем, что они добились таких больших успехов всего за три недели. Наша команда очень благодарна за замечательные улучшения, которые они внесли, и за возможность так быстро ознакомиться с концепцией продукта.",
      avatar: "/home/avatar.png",
    },
    {
      id: 2,
      name: "Анна Смирнова",
      position: "Digital Solutions",
      text: "Их профессионализм и внимание к деталям превзошли все наши ожидания. Проект был завершен в срок, а результаты превзошли все, что мы могли себе представить. Рекомендую эту команду всем, кто ищет инновационные решения.",
      avatar: "/home/avatar.png",
    },
    {
      id: 3,
      name: "Михаил Петров",
      position: "Tech Innovators",
      text: "Сотрудничество с этой командой существенно повысило эффективность наших бизнес-процессов. Они проявили глубокое понимание наших потребностей и предложили ряд решений, которые оказались именно тем, что нам было нужно.",
      avatar: "/home/avatar.png",
    },
    {
      id: 4,
      name: "Елена Козлова",
      position: "Creative Studios",
      text: "Нам понравился их творческий подход и способность быстро адаптироваться к изменяющимся требованиям. Команда всегда была на связи и оперативно решала возникающие вопросы. Результат превзошел наши ожидания.",
      avatar: "/home/avatar.png",
    },
    {
      id: 5,
      name: "Сергей Иванов",
      position: "Construct Pro",
      text: "Работа с этой командой была настоящим удовольствием. Они не только выполнили все наши требования, но и предложили ряд улучшений, которые значительно повысили качество конечного продукта.",
      avatar: "/home/avatar.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [animating, reviews.length]);

  const handleReviewClick = (index) => {
    if (index !== activeIndex && !animating) {
      setAnimating(true);
      setActiveIndex(index);
      // Reset animation flag after transition completes
      setTimeout(() => setAnimating(false), 500);
    }
  };

  // Memoize the ordered reviews to avoid unnecessary recalculations
  const orderedReviews = useMemo(() => {
    const result = [...reviews];
    const activeReview = result.splice(activeIndex, 1)[0];
    result.unshift(activeReview);
    return result;
  }, [reviews, activeIndex]);

  return (
    <main className="w-full max-w-5xl mx-auto py-8 md:py-12 lg:py-16 px-4 relative space-y-4 md:space-y-5">
      <h1 className="textNormal5 text-center text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
        Несколько слов от наших клиентов
      </h1>
      
      {/* Review section */}
      <div className="bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8 mb-4 md:mb-8 relative">
        <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 text-3xl sm:text-4xl font-serif text-gray-800">
          "
        </div>
        <div className="transition-opacity duration-500">
          <p className="text-gray-700 text-base sm:text-lg mt-4 sm:mt-6 mb-4 sm:mb-6 pl-4 sm:pl-6 relative">
            {reviews[activeIndex].text}
          </p>
        </div>
        <div className="absolute -bottom-2 left-8 sm:left-10 transform rotate-45 w-4 h-4 bg-gray-100"/>
      </div>
      
      {/* User avatars section - Scrollable on mobile */}
      <div className="flex overflow-x-auto pb-4 md:pb-0 md:overflow-visible md:justify-start items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
        {orderedReviews.map((review, index) => {
          const isActive = index === 0;
          const originalIndex = reviews.findIndex((r) => r.id === review.id);

          return (
            <div key={review.id} className="flex-shrink-0">
              {isActive ? (
                <button
                  onClick={() => handleReviewClick(originalIndex)}
                  className="flex items-center gap-2 sm:gap-3 focus:outline-none transition-all duration-300"
                  aria-label={`View review from ${review.name}`}
                >
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-medium text-gray-900 text-left text-sm sm:text-base">
                      {review.name}
                    </h3>
                    <p className="text-gray-600 text-left text-xs sm:text-sm">
                      {review.position}
                    </p>
                  </div>
                </button>
              ) : (
                <button
                  onClick={() => handleReviewClick(originalIndex)}
                  className="opacity-60 hover:opacity-80 transition-all duration-300 focus:outline-none"
                  aria-label={`View review from ${review.name}`}
                >
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-transparent"
                  />
                </button>
              )}
            </div>
          );
        })}
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