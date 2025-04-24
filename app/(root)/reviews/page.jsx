import React from "react";
import ReviewCard from "./_components/reviewCard";
import Hero from "@/components/shared/Hero";
import ReviewCardGoriz from "./_components/reviewCardGoriz";
import { getTranslations } from "next-intl/server";

export default async function ReviewsPage() {
  const t = await getTranslations("ReviewsPage");

  const reviewsData = [
    {
      id: 1,
      rating: 5,
      text: t("review_1_text"),
      name: t("review_1_name"),
      level: t("review_1_level"),
      image: "/home/avatar.webp",
    },
    {
      id: 2,
      rating: 5,
      text: t("review_2_text"),
      name: t("review_2_name"),
      level: t("review_2_level"),
      image: "/home/avatar.webp",
    },
    {
      id: 3,
      rating: 5,
      text: t("review_3_text"),
      name: t("review_3_name"),
      level: t("review_3_level"),
      image: "/assets/abgani.webp",
    },
  ];

  return (
    <main className="space-y-8 md:space-y-12">
      <Hero
        image="reviewsImage.webp"
        title={t("hero_title")}
        description={t("hero_description")}
        cardTitle={t("hero_card_title")}
        cardButtonText={t("hero_card_button_text")}
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
                  image={item?.image}
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
                  image={item?.image}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
