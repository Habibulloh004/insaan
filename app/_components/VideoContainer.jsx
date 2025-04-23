import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import React from "react";

export default function VideoContainer() {
  return (
    <main className="flex w-full flex-col md:flex-row md:h-[500px]">
      {/* Text Section - Full width on mobile, 1/4 on desktop */}
      <section className="w-full md:w-1/3 lg:w-1/4 bg-primary/90 p-6 md:p-8 lg:p-10 space-y-3">
        <h1 className="textNormal4 text-white">Loyihalar galereyasi</h1>
        <div className="w-[60px] h-[3px] bg-amber-300"/>
        <p className="text-white md:h-[calc(500px-132px)] md:overflow-y-auto">
          Biz amalga oshirgan loyihalar bilan yaqindan tanishing. Bu yerda siz
          INSAAN arxitektura firmasi tomonidan tayyorlangan turli xil bino va
          inshootlarning suratlari va qisqacha tavsiflari bilan tanishishingiz
          mumkin. Har bir loyiha — bu mijozimiz ishonchi, bizning
          professionalligimiz va ijodkorligimiz mahsulidir.Yangi zamonaviy
          qurilishlar, innovatsion dizayn va funksional rejalashtirish —
          bularning barchasi bizning galereyamizda mujassam.
        </p>
      </section>
      
      {/* Video Section - Full width on mobile, 3/4 on desktop */}
      <section className="w-full md:w-2/3 lg:w-3/4 md:h-[500px]">
        <div className="h-full">
          <HeroVideoDialog
            className="h-full"
            classNameImg="object-cover w-full md:h-[500px]"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/5VH9lnFEPyo?si=jCDkXJ5mm_KMbKJf"
            thumbnailSrc="/home/videoImage.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </section>
    </main>
  );
}