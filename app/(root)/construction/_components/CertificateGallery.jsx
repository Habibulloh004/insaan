"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from 'next/navigation';

// Ko'p tilli matnlarni saqlash uchun obyekt
const translations = {
  en: {
    certificate: "Certificate",
    nextImage: "Next",
    prevImage: "Previous",
  },
  ru: {
    certificate: "Сертификат",
    nextImage: "Следующий",
    prevImage: "Предыдущий",
  },
  uz: {
    certificate: "Sertifikat",
    nextImage: "Keyingi",
    prevImage: "Oldingi",
  }
};

const CertificateGallery = ({ certificates, defaultLanguage = 'uz' }) => {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState(defaultLanguage);
  
  // Tanlangan til uchun matnlarni olish
  const t = translations[currentLang] || translations.uz;
  
  // Til o'zgarishini kuzatish
  useEffect(() => {
    if (router && router.locale) {
      setCurrentLang(router.locale);
    }
  }, [router]);
  
  // Toq son sertifikatlar bo'lganda oxirgi sertifikat markazda bo'lishi uchun
  const isOddCertificates = certificates.length % 2 !== 0;
  
  return (
    <>
      {/* Mobile ko'rinish (md breakpoint'dan kichik ekranlarda ko'rsatiladi) */}
      <div className="md:hidden w-full max-w-screen-md mx-auto px-4">
        {certificates.map((certificate, certificateIndex) => (
          <div key={`certificate-mobile-${certificateIndex}`} className="mb-8">
            <Carousel 
              opts={{
                align: "start",
                containScroll: "trimSnaps"
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2">
                {certificate.images.map((image, imageIndex) => (
                  <CarouselItem 
                    key={`image-mobile-${certificateIndex}-${imageIndex}`}
                    className="pl-2 basis-auto" // basis-auto bu yerda muhim - element o'z o'lchamiga ega bo'ladi
                  >
                    <div className="relative rounded-lg overflow-hidden" 
                         style={{ width: '220px', height: '300px' }}> {/* o'lchamlarni o'zgartirdim, mobil uchun kichikroq */}
                      <Image
                        src={image.src}
                        alt={image.alt || `${t.certificate} ${certificateIndex + 1} - ${imageIndex + 1}`}
                        fill
                        style={{ objectFit: 'contain' }}
                        quality={100}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        ))}
      </div>
      
      {/* Desktop ko'rinish (md va undan katta ekranlarda ko'rsatiladi) */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 w-full max-w-screen-xl mx-auto px-4">
        {certificates.map((certificate, certificateIndex) => {
          // Agar oxirgi element va umumiy son toq bo'lsa markazlashtiramiz
          const isLastAndOdd = isOddCertificates && certificateIndex === certificates.length - 1;

          return (
            <div 
              key={`certificate-desktop-${certificateIndex}`} 
              className={`flex flex-row flex-nowrap gap-4 ${isLastAndOdd ? 'md:col-span-2 justify-center' : ''}`}
            >
              {certificate.images.map((image, imageIndex) => (
                <div 
                  key={`image-desktop-${certificateIndex}-${imageIndex}`}
                  className="relative rounded-lg overflow-hidden"
                  style={{ width: '300px', height: '400px' }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt || `${t.certificate} ${certificateIndex + 1} - ${imageIndex + 1}`}
                    fill
                    loading="eager"
                    style={{ objectFit: 'contain' }}
                    quality={100}
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CertificateGallery;

// Qo'llanish namunasi:
/*
const certificates = [
  {
    // Birinchi sertifikat
    images: [
      { src: '/certificates/litsenziya1.jpg', alt: 'Litsenziya 1' },
      { src: '/certificates/litsenziya2.jpg', alt: 'Litsenziya 2' }
    ]
  },
  {
    // Ikkinchi sertifikat
    images: [
      { src: '/certificates/tasdiqnoma1.jpg', alt: 'Tasdiqnoma 1' },
      { src: '/certificates/tasdiqnoma2.jpg', alt: 'Tasdiqnoma 2' }
    ]
  },
  {
    // Uchinchi sertifikat
    images: [
      { src: '/certificates/litsenziya3.jpg', alt: 'Litsenziya 3' }
    ]
  }
];

// Komponenti bilan ishlatish:
// <CertificateGallery certificates={certificates} defaultLanguage="uz" />
*/