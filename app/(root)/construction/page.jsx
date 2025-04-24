import VideoContainer from "@/app/_components/VideoContainer";
import Hero from "@/components/shared/Hero";
import React from "react";
import CertificateGallery from "./_components/CertificateGallery";
import CircleBar from "@/components/ui/circlebar";
import { getTranslations } from "next-intl/server";

// export const dynamic = 'force-static'

export default async function Construction() {
  const t = await getTranslations("Construction");

  const circleBarData = [
    {
      id: 1,
      title: t("circlebar_1_title"),
      progress: 0,
    },
    {
      id: 2,
      title: t("circlebar_2_title"),
      progress: 25,
    },
    {
      id: 3,
      title: t("circlebar_3_title"),
      progress: 50,
    },
    {
      id: 4,
      title: t("circlebar_4_title"),
      progress: 75,
    },
    {
      id: 5,
      title: t("circlebar_5_title"),
      progress: 100,
    },
    {
      id: 6,
      title: t("circlebar_6_title"),
      progress: 100,
    },
  ];

  const certificates = [
    {
      images: [
        {
          src: t("certificate_1_image_1_src"),
          alt: t("certificate_1_image_1_alt"),
        },
        {
          src: t("certificate_1_image_2_src"),
          alt: t("certificate_1_image_2_alt"),
        },
      ],
    },
    {
      images: [
        {
          src:  t("certificate_2_image_1_src"),
          alt: t("certificate_2_image_1_alt"),
        },
        {
          src: t("certificate_2_image_2_src"),
          alt: t("certificate_2_image_2_alt"),
        },
      ],
    },
    {
      images: [
        {
          src: t("certificate_3_image_1_src"),
          alt: t("certificate_3_image_1_alt"),
        },
      ],
    },
  ];

  return (
    <main className="space-y-12">
      <Hero
        image="sertificateImage.webp"
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
        <h1 className="w-full textNormal5 font-[300] text-center text-2xl md:text-3xl">
          {t("pricing_heading")}
        </h1>
        <CertificateGallery certificates={certificates} defaultLanguage="uz" />
      </section>
      <section className="flex text-primary/70 max-w-[1440px] mx-auto w-11/12 relative z-10 flex-col gap-8">
        <h1 className="w-full textNormal5 font-[300] text-center text-2xl md:text-3xl">
          {t("progress_heading")}
        </h1>
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
          {circleBarData?.map((item, idx) => (
            <div key={idx} className="w-[150px]">
              <CircleBar
                title={item?.title}
                value={item?.progress}
                text={`${item?.progress}%`}
              />
            </div>
          ))}
        </div>
      </section>
      <VideoContainer />
    </main>
  );
}
