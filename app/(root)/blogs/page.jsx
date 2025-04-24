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
import { getTranslations } from "next-intl/server";

export default async function Blogs() {
  const t = await getTranslations("Blogs");

  const testimonials = [
    {
      id: "item-1",
      title: t("testimonial_1_title"),
      description: t("testimonial_1_description"),
      videoSrc: "https://www.youtube.com/embed/5VH9lnFEPyo?si=jCDkXJ5mm_KMbKJf",
      thumbnailSrc: "/home/videoBack.webp",
      thumbnailAlt: t("testimonial_1_video_alt"),
    },
    {
      id: "item-2",
      title: t("testimonial_2_title"),
      description: t("testimonial_2_description"),
      videoSrc: "https://www.youtube.com/embed/5VH9lnFEPyo?si=jCDkXJ5mm_KMbKJf",
      thumbnailSrc: "/home/videoBack.webp",
      thumbnailAlt: t("testimonial_2_video_alt"),
    },
    {
      id: "item-3",
      title: t("testimonial_3_title"),
      description: t("testimonial_3_description"),
      videoSrc: "https://www.youtube.com/embed/5VH9lnFEPyo?si=jCDkXJ5mm_KMbKJf",
      thumbnailSrc: "/home/videoBack.webp",
      thumbnailAlt: t("testimonial_3_video_alt"),
    },
  ];

  const images = [
    { src: "/workers/blog1.webp", alt: t("image_1_alt") },
    { src: "/workers/blog2.webp", alt: t("image_2_alt") },
    { src: "/workers/blog3.webp", alt: t("image_3_alt") },
  ];

  return (
    <main className="space-y-8 md:space-y-12">
      <Hero
        image="blogImage.webp"
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
                      thumbnailAlt={testimonial.thumbnailAlt}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="max-md:hidden w-11/12 max-w-[1440px] mx-auto grid grid-cols-3 gap-4 px-4 md:px-0">
        {images.map((image, idx) => {
          let classNames = "relative w-full h-48 md:h-64";
          if (idx === 0) classNames += "col-span-2 row-span-2 h-full md:h-auto";
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
      <div className="md:hidden w-11/12 max-w-[1440px] mx-auto flex flex-col gap-4 px-4 md:px-0">
        {images.map((image, idx) => {
          return (
            <div key={idx} className={"relative w-full aspect-[16/6]"}>
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
