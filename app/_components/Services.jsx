"use client"

import Link from "next/link";
import React from "react";
import ServiceCard from "./ServicesCard";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");
  const all = useTranslations("All");

  const servicesData = [
    {
      title: t("service_1_title"),
      desc: t("service_1_desc"),
      image: "/home/services1.webp"
    },
    {
      title: t("service_2_title"),
      desc: t("service_2_desc"),
      image: "/home/services2.webp"
    },
    {
      title: t("service_3_title"),
      desc: t("service_3_desc"),
      image: "/home/services3.webp"
    }
  ];

  return (
    <main className="max-w-[1440px] mx-auto w-11/12 py-10 space-y-10">
      <h1 className="textNormal5 font-[300] text-center md:text-left text-2xl md:text-3xl">
        {t("heading")}
      </h1>

      <div className="grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, idx) => (
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
          <h1 className="px-1">{all("all_view")}</h1>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </main>
  );
}