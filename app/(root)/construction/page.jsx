import VideoContainer from "@/app/_components/VideoContainer";
import Hero from "@/components/shared/Hero";
import React from "react";
import CertificateGallery from "./_components/CertificateGallery";
import CircleBar from "@/components/ui/circlebar";
const circleBarData = [
  {
    id: 1,
    title: "Mijoz bilan bog‘lanish va ehtiyojni aniqlash",
    progress: 0,
  },
  {
    id: 2,
    title: "Texnik topshiriq tayyorlash",
    progress: 25,
  },
  {
    id: 3,
    title: "Tijorat taklifi va shartnoma",
    progress: 50,
  },
  {
    id: 4,
    title: "Dizayn va dasturlash",
    progress: 75,
  },
  {
    id: 5,
    title: "Testlash va taqdimot",
    progress: 100,
  },
  {
    id: 6,
    title: "Yuborish va texnik qo‘llab-quvvatlash",
    progress: 100,
  },
];
export default function Construction() {
  const certificates = [
    {
      images: [
        { src: "/certificates/litsenziya1.webp", alt: "Litsenziya 1" },
        { src: "/certificates/litsenziya2.webp", alt: "Litsenziya 2" },
      ],
    },
    {
      images: [
        { src: "/certificates/tasdiqnoma1.webp", alt: "Tasdiqnoma 1" },
        { src: "/certificates/tasdiqnoma2.webp", alt: "Tasdiqnoma 2" },
      ],
    },
    {
      images: [{ src: "/certificates/litsenziya3.webp", alt: "Litsenziya 3" }],
    },
  ];
  return (
    <main className="space-y-12">
      <Hero
        image="sertificateImage.webp"
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
        <h1 className="w-full textNormal5 font-[300] text-center text-2xl md:text-3xl">
          Narxlar har bir loyiha uchun alohida kelishiladi!
        </h1>
        <CertificateGallery certificates={certificates} defaultLanguage="uz" />
      </section>
      <section className="flex text-primary/70 max-w-[1440px] mx-auto w-11/12 relative z-10 flex-col gap-8">
        <h1 className="w-full textNormal5 font-[300] text-center text-2xl md:text-3xl">
          Ish bosqichlari bo‘yicha bajarilish progressi
        </h1>
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
          {circleBarData?.map((item, idx) => (
            <div key={idx} className="w-[150px]">
              <CircleBar title={item?.title} value={item?.progress} text={`${item?.progress}%`}/>
            </div>
          ))}
        </div>
      </section>
      <VideoContainer />
    </main>
  );
}
