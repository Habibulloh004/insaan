import Image from "next/image";
import React from "react";

export default function WorkerCard({ image, level, name }) {
  return (
    <main className="bg-white space-y-3 shadow-xl rounded-md overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 cursor-pointer group">
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={name || "Logo"}
            loading="eager"
            width={500}
            height={500}
            className="w-[300px] object-cover aspect-[3/4] relative transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="space-y-1 h-[90px] px-4 pb-4">
          <h1 className="text-xl w-2/3 font-bold text-black transition-colors duration-300 group-hover:text-primary">{name}</h1>
          <p className="text-black text-xs">{level}</p>
        </div>
    </main>
  );
}