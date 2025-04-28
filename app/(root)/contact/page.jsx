import Hero from "@/components/shared/Hero";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import MyForm from "./_components/contactForm";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

// export const dynamic = 'force-static'

export default async function Contact() {
  const t = await getTranslations("Contact");
  const locale = await getLocale();
  const socials = [
    {
      image: "/socials/facebook.webp",
      link: "https://www.facebook.com/share/1UpmwMGHZX/?mibextid=wwXIfr",
    },
    {
      image: "/socials/telegram.webp",
      link: "https://t.me/insaanuz",
    },
    {
      image: "/socials/instagram.webp",
      link: "https://www.instagram.com/insaan_group?igsh=MWxzNGVmOHNheW5sYQ==",
    },
    {
      image: "/socials/google.webp",
      link: "https://www.google.com/",
    },
    {
      image: "/socials/whatsapp.webp",
      link: "https://web.whatsapp.com/",
    },
  ];

  return (
    <main className="space-y-8 md:space-y-12">
      <Hero
        image="contactImage.webp"
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
      <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto w-11/12 relative z-10 gap-6 md:gap-8">
        <section className="w-full lg:w-1/2">
          <h1 className="w-full text-xl md:textNormal4 font-bold text-black mb-4">
            {t("communication_heading")}
          </h1>
          <ul className="space-y-4 mb-8">
            <li className="flex justify-start items-center gap-2">
              <Phone className="min-w-5" />
              <div className="p-2 space-y-1">
                <h1 className="font-medium">{t("phone_title")}</h1>
                <Link
                  prefetch={true}
                  target="_blank"
                  href="tel:+998994444004"
                  className="text-sm md:text-base hover:underline"
                >
                  +998 (99) 444-40-04
                </Link>
              </div>
            </li>
            <li className="flex justify-start items-center gap-2">
              <Mail className="min-w-5" />
              <div className="p-2 space-y-1">
                <h1 className="font-medium">{t("email_title")}</h1>
                <Link
                  prefetch={true}
                  target="_blank"
                  href="mailto:insaanuzbekistan@gmail.com"
                  className="text-sm md:text-base hover:underline"
                >
                  insaanuzbekistan@gmail.com
                </Link>
              </div>
            </li>
            <li className="flex justify-start items-center gap-2">
              <MapPin className="min-w-5" />
              <div className="p-2 space-y-1">
                <h1 className="font-medium">{t("office_title")}</h1>
                <Link
                  prefetch={true}
                  target="_blank"
                  href="https://yandex.uz/maps/-/CHf4vM9F"
                  className="text-sm md:text-base hover:underline"
                >
                  {t("office_address")}
                </Link>
              </div>
            </li>
          </ul>
          <div>
            <h1 className="w-full text-xl md:textNormal4 font-bold text-black mb-4">
              {t("form_heading")}
            </h1>
            <MyForm />
          </div>
        </section>
        <section className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="w-full sm:w-[90%] lg:w-[45vw] mx-auto h-[250px] sm:h-[300px] md:h-[400px] mt-5 rounded-xl overflow-hidden border">
            <iframe
              src={`https://yandex.uz/map-widget/v1/?ll=69.342099%2C41.276797&mode=whatshere&whatshere%5Bpoint%5D=69.342099%2C41.276797&z=18&lang=${locale}`}
              width="100%"
              height="100%"
              frameBorder="1"
              allowFullScreen
              style={{ position: "relative" }}
            ></iframe>
          </div>
          <div className="w-full flex justify-center sm:justify-between items-center gap-3 px-4 sm:px-8 py-4 mt-4 flex-wrap">
            {socials?.map((item, idx) => {
              return (
                <Link
                  prefetch={true}
                  key={idx}
                  href={item?.link}
                  target="_blank"
                  className="mx-2 sm:mx-0 mb-2 sm:mb-0"
                >
                  <Image
                    width={32}
                    height={32}
                    alt="image"
                    src={item?.image}
                    className="hover:opacity-80"
                  />
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
