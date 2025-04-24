import ServiceCard from "@/app/_components/ServicesCard";
import VideoContainer from "@/app/_components/VideoContainer";
import Hero from "@/components/shared/Hero";
import { getTranslations } from "next-intl/server";
import React from "react";

// export const dynamic = 'force-static'

export default async function Services() {
  const t = await getTranslations("Services");

  const servicesData = [
    {
      title: t("service_1_title"),
      desc: t("service_1_desc"),
      image: "/home/services1.webp",
    },
    {
      title: t("service_2_title"),
      desc: t("service_2_desc"),
      image: "/home/services2.webp",
    },
    {
      title: t("service_3_title"),
      desc: t("service_3_desc"),
      image: "/home/services3.webp",
    },
  ];

  return (
    <main className="space-y-12">
      <Hero
        image="serviceImage.webp"
        title={t("hero_title")}
        description={t("hero_description")}
        cardTitle={t("hero_card_title")}
        cardButtonText={t("hero_card_button_text")}
        cardButtonLink="/contact"
        imagePosition="top"
        gradientDirection="to-r"
        cardPosition="right-bottom"
        showCard={true}
      />
      <section className="flex text-primary/70 max-w-[1440px] mx-auto w-11/12 relative z-10 flex-col gap-8">
        <h1 className="textNormal5 font-[300] text-center md:text-left text-2xl md:text-3xl">
          {t("heading")}
        </h1>
        <div className="grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData?.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              description={service.desc}
              image={service.image}
              priority={idx < 2}
              imageQuality={90}
            />
          ))}
        </div>
      </section>
      <VideoContainer />
    </main>
  );
}