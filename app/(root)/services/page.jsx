import { servicesData } from "@/app/_components/Services";
import ServiceCard from "@/app/_components/ServicesCard";
import VideoContainer from "@/app/_components/VideoContainer";
import Hero from "@/components/shared/Hero";
import React from "react";

export default function Services() {
  return (
    <main className="space-y-12">
      <Hero
        image="serviceImage.jpg"
        title="Мы предоставляем услуги"
        description="Создание индивидуальных архитектурных идеи и проектов."
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
          Мы предоставляем услуги
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
      <VideoContainer/>
    </main>
  );
}
