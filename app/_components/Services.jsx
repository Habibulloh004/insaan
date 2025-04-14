import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Регистрация документов",
    desc: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "/home/services1.jpg",
  },
  {
    title: "Кадастровые документы",
    desc: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "/home/services1.jpg",
  },
  {
    title: "Архитектурные проекты",
    desc: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "/home/services1.jpg",
  },
];

export default function Services() {
  return (
    <main className="max-w-[1440px] mx-auto w-11/12 py-10 space-y-10">
      <h1 className="textNormal5 font-[300] text-center md:text-left text-2xl md:text-3xl">Мы предоставляем услуги</h1>
      
      <div className="grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services?.map((service, idx) => (
          <div key={idx} className="space-y-4 flex flex-col h-full">
            <h2 className="text-primary text-center text-xl font-medium">{service?.title}</h2>
            
            <div className="relative rounded-2xl overflow-hidden h-64 flex-grow shadow-md">
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  quality={90}
                  priority={idx < 2} // Load first two images with priority
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10" />
              
              {/* Text */}
              <div className="absolute inset-0 z-20 p-5 flex items-start justify-center">
                <p className="text-white line-clamp-3 text-center">{service?.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center items-center pt-4">
        <Link
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