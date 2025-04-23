import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServiceCard from "./ServicesCard";

export const servicesData = [
  {
    title: "Регистрация документов",
    desc: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "/home/services1.webp",
  },
  {
    title: "Кадастровые документы",
    desc: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "/home/services1.webp",
  },
  {
    title: "Архитектурные проекты",
    desc: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "/home/services1.webp",
  },
  {
    title: "Регистрация документов",
    desc: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "/home/services1.webp",
  },
  {
    title: "Кадастровые документы",
    desc: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "/home/services1.webp",
  },
  {
    title: "Архитектурные проекты",
    desc: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "/home/services1.webp",
  },
  {
    title: "Регистрация документов",
    desc: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "/home/services1.webp",
  },
];

export default function Services() {
  return (
    <main className="max-w-[1440px] mx-auto w-11/12 py-10 space-y-10">
      <h1 className="textNormal5 font-[300] text-center md:text-left text-2xl md:text-3xl">
        Мы предоставляем услуги
      </h1>

      <div className="grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData?.slice(0, 3)?.map((service, idx) => (
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

      <div className="flex justify-center items-center pt-4">
        <Link
          prefetch={true}
          href="/services"
          className="font-medium text-primary relative group"
        >
          <h1 className="px-1">Узнать больше</h1>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </main>
  );
}
