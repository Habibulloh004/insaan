import Hero from "@/components/shared/Hero";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import MyForm from "./_components/contactForm";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

// export const dynamic = 'force-static'

export default async function Contact() {
  const t = await getTranslations("Contact");

  const socials = [
    {
      image: "/socials/facebook.webp",
      link: "https://www.facebook.com/",
    },
    {
      image: "/socials/telegram.webp",
      link: "https://telegram.org",
    },
    {
      image: "/socials/instagram.webp",
      link: "https://www.instagram.com/",
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
                  href="mailto:insaan@gmail.com"
                  className="text-sm md:text-base hover:underline"
                >
                  {t("email_address")}
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
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d374.8446289002891!2d69.34387546746738!3d41.27062585091406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE2JzE0LjQiTiA2OcKwMjAnMzkuMiJF!5e0!3m2!1suz!2s!4v1745418159519!5m2!1suz!2s"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
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
