import Hero from "@/components/shared/Hero";
import { useTranslations } from "next-intl";
import React from "react";
import { ProjectImageContainer } from "./_components/ProjectImageContainer";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function ProjectsPage() {
  const t = useTranslations("Projects");
  const images1 = Array.from({ length: 18 }, (_, i) => {
    const isLandscape = i % 2 === 0;
    const width = isLandscape ? 800 : 600;
    const height = isLandscape ? 600 : 800;
    return `/projects/moreFloor/${i > 9 ? `0${i + 1}` : `00${i + 1}`}.webp`;
  });
  const images2 = Array.from({ length: 23 }, (_, i) => {
    const isLandscape = i % 2 === 0;
    const width = isLandscape ? 800 : 600;
    const height = isLandscape ? 600 : 800;
    return `/projects/noturar/${i > 9 ? `0${i + 1}` : `00${i + 1}`}.webp`;
  });
  const images3 = Array.from({ length: 18 }, (_, i) => {
    const isLandscape = i % 2 === 0;
    const width = isLandscape ? 800 : 600;
    const height = isLandscape ? 600 : 800;
    return `/projects/uchastka/${i > 9 ? `0${i + 1}` : `00${i + 1}`}.webp`;
  });

  return (
    <main className="space-y-8 md:space-y-12">
      <Hero
        image="projectsImage.webp"
        title={t("hero_title")}
        description={t("hero_description")}
        cardTitle={""}
        cardButtonText={""}
        cardButtonLink="/contact"
        imagePosition="center"
        gradientDirection="to-r"
        cardPosition="right-bottom"
        showCard={false}
      />
      <div className="w-11/12 mx-auto px-4 space-y-8">
        <div className="flex justify-center items-center gap-5 w-full text-3xl max-sm:text-xl max-md:text-2xl font-[400] text-primary">
          <h1 className="w-full">{t("title")}</h1>
        </div>
        <div className="space-y-10">
          <ProjectImageContainer images={images1} />
          <ProjectImageContainer images={images2} />
          <ProjectImageContainer images={images3} />
        </div>
      </div>
    </main>
  );
}
