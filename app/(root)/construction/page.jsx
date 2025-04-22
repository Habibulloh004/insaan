import VideoContainer from "@/app/_components/VideoContainer";
import Hero from "@/components/shared/Hero";
import React from "react";
import CertificateGallery from "./_components/CertificateGallery";

export default function Construction() {
  const certificates = [
    {
      images: [
        { src: "/certificates/litsenziya1.png", alt: "Litsenziya 1" },
        { src: "/certificates/litsenziya2.png", alt: "Litsenziya 2" },
      ],
    },
    {
      images: [
        { src: "/certificates/tasdiqnoma1.png", alt: "Tasdiqnoma 1" },
        { src: "/certificates/tasdiqnoma2.png", alt: "Tasdiqnoma 2" },
      ],
    },
    {
      images: [{ src: "/certificates/litsenziya3.png", alt: "Litsenziya 3" }],
    },
  ];
  return (
    <main className="space-y-12">
      <Hero
        image="sertificateImage.jpg"
        title="Лицензия на строительство и строителей"
        description=""
        cardTitle="Закажите услугу сейчас"
        cardButtonText="Связаться"
        cardButtonLink="/contact"
        imagePosition="top"
        gradientDirection="to-r"
        cardPosition="right-bottom"
        showCard={true}
      />
      <section className="flex text-primary/70 max-w-[1440px] mx-auto w-11/12 relative z-10 flex-col gap-8">
        <h1 className="textNormal5 font-[300] text-center md:text-left text-2xl md:text-3xl">
          Narxlar har bir loyiha uchun alohida kelishiladi !
        </h1>
        <CertificateGallery certificates={certificates} defaultLanguage="uz" />
      </section>
      <VideoContainer />
    </main>
  );
}
