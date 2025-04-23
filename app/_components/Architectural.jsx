import Image from "next/image";
import Link from "next/link";
import React from "react";
import { workerData } from "../(root)/about-us/page";
import WorkerCard from "@/components/shared/WorkerCard";
import WorkersCarousel from "@/components/shared/WorkderCarousel";

const architectural = [
  {
    title: "Довольных клиентов",
    count: "50+",
    image: "/home/clients.webp",
  },
  {
    title: "Работников",
    count: "100",
    image: "/home/worker.webp",
  },
  {
    title: "Завершённых проектов",
    count: "100+",
    image: "/home/factory.webp",
  },
];

export default function Architectural({ workers }) {
  return (
    <main className="relative h-full py-16 space-y-10">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 top-10">
        <Image
          src="/home/arxitecBack.webp"
          alt="Архитектурный фон"
          layout="fill"
          objectFit="cover"
          objectPosition="end"
          priority
          loading="eager"
          className="opacity-100"
        />
      </div>

      {/* Content */}
      <section className="text-primary/70 max-w-[1440px] mx-auto w-11/12 relative z-10 flex flex-col md:flex-row gap-8 items-center">
        {/* Left column - Text content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            Архитектурная фирма <strong className="">INSAAN</strong>
          </h1>

          <ul className="space-y-2 text-lg pl-5 text-gray-700">
            <li>Была основана в 2022 году</li>
            <li>Работавшая с крупными строительными компаниями</li>
            <li>Имеет портфолио в 100+ проектов</li>
          </ul>

          <p className="text-lg text-gray-700">
            За своё время работы фирма{" "}
            <strong className="text-primary">INSAAN</strong> успела достичь
            значительных результатов в сфере архитектурного проектирования и
            зарекомендовать себя как надежный партнер для клиентов.
          </p>
        </div>

        {/* Right column - Logo and stats */}
        <div className="md:w-1/2 space-y-8">
          {/* Logo */}
          <div className="w-full max-w-sm mx-auto">
            <Image
              src="/home/logoForHome.webp"
              alt="Логотип INSAAN"
              loading="eager"
              width={300}
              height={300}
              className="w-full h-auto"
              quality={90}
            />
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {architectural?.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 rounded-lg shadow-md p-4 flex items-start gap-3"
              >
                <div className="w-16 h-16 mb-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={64}
                    height={64}
                    loading="eager"
                    className="w-full h-full object-contain"
                    quality={80}
                  />
                </div>
                <div className="">
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    {item.count}
                  </h3>
                  <p className="text-gray-700">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {!workers && (
        <section className="flex justify-center items-center">
          <Link
            prefetch={true}
            href="/architectural"
            className="font-medium text-primary relative group"
          >
            <h1 className="px-1">Узнать больше</h1>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </section>
      )}
      {workers && (
        <div className="relative z-10">
          {/* Mobil uchun carousel */}
          <div className="block md:hidden">
            <WorkersCarousel />
          </div>
          {/* Desktop uchun original grid */}
          <section className="hidden md:flex text-primary/70 max-w-[1440px] mx-auto w-11/12 relative z-10 flex-wrap gap-4 md:gap-10 justify-center">
            {workerData?.map((item, idx) => (
              <div key={idx} className="">
                <WorkerCard
                  name={item?.name}
                  level={item?.level}
                  image={item?.image}
                />
              </div>
            ))}
          </section>
        </div>
      )}
    </main>
  );
}
