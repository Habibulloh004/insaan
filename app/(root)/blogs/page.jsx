"use client";

import Hero from "@/components/shared/Hero";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Image from "next/image";

// Sample testimonial data
const testimonials = [
  {
    id: "item-1",
    title: "Иван Петров",
    description:
      "Отличный сервис! Я очень доволен качеством работы и обслуживанием клиентов. Буду рекомендовать вашу компанию своим друзьям и коллегам.",
    videoSrc: "https://www.youtube.com/embed/5VH9lnFEPyo?si=jCDkXJ5mm_KMbKJf",
    thumbnailSrc: "/home/videoImage.webp",
  },
  {
    id: "item-2",
    title: "Анна Сидорова",
    description:
      "Профессиональный подход к делу. Всё было сделано вовремя и качественно. Спасибо большое за помощь!",
    videoSrc: "https://www.youtube.com/embed/5VH9lnFEPyo?si=jCDkXJ5mm_KMbKJf",
    thumbnailSrc: "/home/videoImage.webp",
  },
  {
    id: "item-3",
    title: "Алексей Кузнецов",
    description:
      "Я впечатлен скоростью выполнения заказа и качеством результата. Определенно буду обращаться снова.",
    videoSrc: "https://www.youtube.com/embed/5VH9lnFEPyo?si=jCDkXJ5mm_KMbKJf",
    thumbnailSrc: "/home/videoImage.webp",
  },
];

const images = [
  { src: "/assets/blogBottomImage.webp", alt: "Main image" },
  { src: "/assets/blogBottomImage.webp", alt: "Second image" },
  { src: "/assets/blogBottomImage.webp", alt: "Third image" },
];

export default function Blogs() {
  return (
    <main className="space-y-8 md:space-y-12">
      <Hero
        image="blogImage.webp"
        title="Блог"
        description="Наш блог и часто задаваемые вопросы"
        cardTitle="Закажите услугу сейчас"
        cardButtonText="Связаться"
        cardButtonLink="/contact"
        imagePosition="bottom"
        gradientDirection="to-r"
        cardPosition="right-bottom"
        showCard={false}
      />

      <div className="w-11/12 lg:max-w-4xl mx-auto px-4">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <AccordionItem key={testimonial.id} value={testimonial.id}>
              <AccordionTrigger className="text-xl font-bold py-4 border-b-[1px]">
                {testimonial.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-8 py-3">
                  <div className="space-y-4">
                    <p className="text-gray-700">{testimonial.description}</p>
                  </div>
                  <div className="h-full w-full flex justify-center items-center">
                    <HeroVideoDialog
                      className="max-w-md h-full"
                      classNameImg="object-cover w-full md:h-[300px]"
                      animationStyle="from-center"
                      videoSrc={testimonial.videoSrc}
                      thumbnailSrc={testimonial.thumbnailSrc}
                      thumbnailAlt={`${testimonial.title} Video`}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="w-11/12 max-w-[1440px] mx-auto grid grid-cols-3 gap-4 px-4 md:px-0">
        {images.map((image, idx) => {
          let classNames = "relative w-full h-48 md:h-64";
          if (idx === 0)
            classNames += " col-span-2 row-span-2 h-full md:h-auto";
          return (
            <div
              key={idx}
              className={classNames}
              style={{
                gridColumn: idx === 0 ? "span 2" : undefined,
                gridRow: idx === 0 ? "span 2" : undefined,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
