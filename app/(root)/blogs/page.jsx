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
import { ImagesComponent } from "@/components/shared/ImagesComponent";

// export const dynamic = 'force-static'

export default async function Blogs() {
  const t = await getTranslations("Blogs");

  const testimonials = [
    {
      id: "item-1",
      title: t("testimonial_1_title"),
      description: t("testimonial_1_description"),
      videoSrc: "https://www.youtube.com/embed/lV8DMJ7WjOU?si=IIgYJwy0oyd7p3dY",
      thumbnailSrc: "/videos/video1.webp",
      thumbnailAlt: t("testimonial_1_video_alt"),
    },
    {
      id: "item-2",
      title: t("testimonial_2_title"),
      description: t("testimonial_2_description"),
      videoSrc: "https://www.youtube.com/embed/SMqa-prC6rI?si=UiFXEBB2Nn2ie6Es",
      thumbnailSrc: "/videos/video2.webp",
      thumbnailAlt: t("testimonial_2_video_alt"),
    },
    {
      id: "item-3",
      title: t("testimonial_3_title"),
      description: t("testimonial_3_description"),
      videoSrc: "https://www.youtube.com/embed/-kShJPTFIqc?si=B5T0eiogf8Bxy1u0",
      thumbnailSrc: "/videos/video3.webp",
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
      <div className="w-11/12 max-w-[1440px] mx-auto">
        <ImagesComponent />
      </div>
     
    </main>
  );
}
