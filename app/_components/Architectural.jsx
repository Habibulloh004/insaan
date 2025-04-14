import Image from "next/image"; 
import Link from "next/link"; 
import React from "react";  

const architectural = [
  {
    title: "Довольных клиентов",
    count: "50+",
    image: "/home/clients.png",
  },
  {
    title: "Работников",
    count: "100",
    image: "/home/worker.png",
  },
  {
    title: "Завершённых проектов",
    count: "100+",
    image: "/home/factory.png",
  },
];  

export default function Architectural() {
  return (
    <main className="relative h-full py-16 space-y-5">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/home/arxitecBack.png"
          alt="Архитектурный фон"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          loading="eager"
          className="opacity-20"
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
              src="/home/logoForHome.png"
              alt="Логотип INSAAN"
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
      <section className="flex justify-center items-center">
        <Link 
          href="/architectural" 
          className="font-medium text-primary relative group"
        >
          <h1 className="px-1">Узнать больше</h1>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </section>
    </main>
  ); 
}