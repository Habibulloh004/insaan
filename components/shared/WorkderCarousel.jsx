"use client";

import React, { useState, useEffect } from "react";
import WorkerCard from "@/components/shared/WorkerCard";

// Import shadcn components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Existing WorkerCard component is imported above, so we're using it directly

const WorkersCarousel = ({workerData}) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000); // 3 sekund

    return () => clearInterval(interval); // Tozalash
  }, [api]);

  return (
    <div className="w-full max-w-[1440px] mx-auto md:px-4 py-6">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <div className="px-4 flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-primary/70">
            Наша команда
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {current} / {count}
            </span>
            <div className="flex gap-1">
              <CarouselPrevious className="static h-8 w-8 translate-y-0 transform-none border border-gray-200 bg-white text-primary hover:bg-gray-50" />
              <CarouselNext className="static h-8 w-8 translate-y-0 transform-none border border-gray-200 bg-white text-primary hover:bg-gray-50" />
            </div>
          </div>
        </div>

        <CarouselContent className="pb-4 -ml-2 md:-ml-4">
          {workerData.map((worker, idx) => (
            <CarouselItem key={idx} className="pl-8 basis-auto">
              <div className="h-full">
                <WorkerCard
                  name={worker.name}
                  level={worker.level}
                  image={worker.image}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom touch area indicators for better mobile UX */}
        <div className="mt-3 flex justify-center gap-1.5">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === current - 1 ? "w-8 bg-primary" : "w-2 bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};
export default WorkersCarousel;
