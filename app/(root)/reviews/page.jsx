import React from "react";
import ReviewCard from "./_components/reviewCard";
import Hero from "@/components/shared/Hero";
import ReviewCardGoriz from "./_components/reviewCardGoriz";
import { getTranslations } from "next-intl/server";

// export const dynamic = 'force-static'

export default async function ReviewsPage() {
  const t = await getTranslations("ReviewsPage");
  const tT = await getTranslations("Reviews");

  const reviewsData = [
    {
      id: 1,
      name: tT("review_1_name"),
      level: tT("review_1_position"),
      text: tT("review_1_text"),
      image: "/home/review1.webp",
    },
    {
      id: 2,
      name: tT("review_2_name"),
      level: tT("review_2_position"),
      text: tT("review_2_text"),
      image: "/home/review2.webp",
    },
    {
      id: 3,
      name: tT("review_3_name"),
      level: tT("review_3_position"),
      text: tT("review_3_text"),
      image: "/home/review3.webp",
    },
    {
      id: 4,
      name: tT("review_4_name"),
      level: tT("review_4_position"),
      text: tT("review_4_text"),
      image: "/home/review4.webp",
    },
    {
      id: 5,
      name: tT("review_5_name"),
      level: tT("review_5_position"),
      text: tT("review_5_text"),
      image: "/home/review5.webp",
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
          {reviewsData?.slice(0,3)?.map((item, idx) => {
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
          {reviewsData?.slice(3,5)?.map((item, idx) => {
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
