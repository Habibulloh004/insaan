import Architectural from "@/app/_components/Architectural";
import VideoContainer from "@/app/_components/VideoContainer";
import Hero from "@/components/shared/Hero";
import { getTranslations } from "next-intl/server";
import React from "react";

// export const dynamic = 'force-static'

export default async function AboutUs() {
  const t = await getTranslations("AboutUs");

  const workerData = [
    {
      name: t("worker_1_name"),
      level: t("worker_1_level"),
      image: "/workers/sherzod.webp",
    },
    {
      name: t("worker_2_name"),
      level: t("worker_2_level"),
      image: "/workers/davronboy.webp",
    },
    {
      name: t("worker_3_name"),
      level: t("worker_3_level"),
      image: "/workers/ziyovuddin.webp",
    },
    {
      name: t("worker_6_name"),
      level: t("worker_6_level"),
      image: "/workers/javohir.webp",
    },
    {
      name: t("worker_5_name"),
      level: t("worker_5_level"),
      image: "/workers/aziz.webp",
    },
  ];

  return (
    <main className="space-y-12">
      <Hero
        image="aboutUsImage.webp"
        title={t("hero_title")}
        description={t("hero_description")}
        cardTitle={t("hero_card_title")}
        cardButtonText={t("hero_card_button_text")}
        cardButtonLink="/contact"
        imagePosition="top"
        gradientDirection="to-r"
        cardPosition="right-bottom"
        showCard={false}
      />
      <Architectural workers={true} workerData={workerData} />
      <VideoContainer />
    </main>
  );
}
