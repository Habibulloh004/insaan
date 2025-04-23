import React from "react";
import ReviewCard from "./_components/reviewCard";
import Hero from "@/components/shared/Hero";
import ReviewCardGoriz from "./_components/reviewCardGoriz";

export default function ReviewsPage() {
  const reviewsData = [
    {
      id: 1,
      rating: 5,
      text: "«Меня постоянно впечатляет качество услуг, предоставляемых этим сайтом. Они превзошли мои ожидания и показали исключительные результаты. Настоятельно рекомендуетсяисключительные результаты. Настоятельно рекомендуется!»",
      name: "Абдугани",
      level: "Possible CEO",
    },
    {
      id: 2,
      rating: 5,
      text: "«Меня постоянно впечатляет качество услуг, предоставляемых этим сайтом. Они превзошли мои ожидания и показали исключительные результаты. Настоятельно рекомендуется!»",
      name: "Абдугани",
      level: "Possible CEO",
    },
    {
      id: 3,
      rating: 5,
      text: "«Меня постоянно впечатляет качество услуг, предоставляемых этим сайтом. Они превзошли мои ожидания и показали исключительные результаты. Настоятельно рекомендуется!»",
      name: "Абдугани",
      level: "Possible CEO",
    },
  ];
  return (
    <main className="space-y-8 md:space-y-12">
      <Hero
        image="reviewsImage.webp"
        title="Отзывы"
        description="Отзывы от наших клиентов"
        cardTitle="Закажите услугу сейчас"
        cardButtonText="Связаться"
        cardButtonLink="/contact"
        imagePosition="bottom"
        gradientDirection="to-r"
        cardPosition="right-bottom"
        showCard={false}
      />
      <section className="flex flex-col max-w-[1440px] mx-auto w-11/12 relative z-10 gap-6 md:gap-8">
        <div className="flex flex-wrap justify-around w-full gap-10">
          {reviewsData?.map((item, idx) => {
            return (
              <div key={item.id} className="py-10">
                <ReviewCard
                  text={item?.text}
                  name={item?.name}
                  rating={item?.rating}
                  level={item?.level}
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-around w-full gap-5">
          {reviewsData?.map((item, idx) => {
            return (
              <div key={item.id} className="p-4">
                <ReviewCardGoriz
                  text={item?.text}
                  name={item?.name}
                  rating={item?.rating}
                  level={item?.level}
                />
              </div>
            );
          })}
        </div>
      </section>
      {/* <ReviewCard/> */}
    </main>
  );
}
