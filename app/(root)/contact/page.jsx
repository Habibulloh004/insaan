import Hero from "@/components/shared/Hero";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import MyForm from "./_components/contactForm";
import Image from "next/image";

export default function Contact() {
  const socials = [
    {
      image: "/socials/facebook.png",
      link: "https://www.facebook.com/",
    },
    {
      image: "/socials/telegram.png",
      link: "https://telegram.org",
    },
    {
      image: "/socials/instagram.png",
      link: "https://www.instagram.com/",
    },
    {
      image: "/socials/google.png",
      link: "https://www.google.com/",
    },
    {
      image: "/socials/whatsapp.png",
      link: "https://web.whatsapp.com/",
    },
  ];
  return (
    <main className="space-y-8 md:space-y-12">
      <Hero
        image="contactImage.jpg"
        title="Контакты"
        description="Контактная информация и способы связи с нами"
        cardTitle="Закажите услугу сейчас"
        cardButtonText="Связаться"
        cardButtonLink="/contact"
        imagePosition="bottom"
        gradientDirection="to-r"
        cardPosition="right-bottom"
        showCard={false}
      />
      <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto w-11/12 relative z-10 gap-6 md:gap-8">
        <section className="w-full lg:w-1/2">
          <h1 className="w-full text-xl md:textNormal4 font-bold text-black mb-4">
            Коммуникация
          </h1>
          <ul className="space-y-4 mb-8">
            <li className="flex justify-start items-center gap-2">
              <Phone className="min-w-5" />
              <div className="p-2 space-y-1">
                <h1 className="font-medium">Позвонить</h1>
                <Link
                  target="_blank"
                  href="tel:+998999999999"
                  className="text-sm md:text-base hover:underline"
                >
                  +998 99 999-99-99
                </Link>
              </div>
            </li>
            <li className="flex justify-start items-center gap-2">
              <Mail className="min-w-5" />
              <div className="p-2 space-y-1">
                <h1 className="font-medium">Адрес электронной почты</h1>
                <Link
                  target="_blank"
                  href="mailto:insaan@gmail.com"
                  className="text-sm md:text-base hover:underline"
                >
                  Insaan@gmail.com
                </Link>
              </div>
            </li>
            <li className="flex justify-start items-center gap-2">
              <MapPin className="min-w-5" />
              <div className="p-2 space-y-1">
                <h1 className="font-medium">Посетите офис</h1>
                <Link
                  target="_blank"
                  href="https://yandex.uz/maps/-/CHf4vM9F"
                  className="text-sm md:text-base hover:underline"
                >
                  Яшнабадский район, улица Иззат Дом №77
                </Link>
              </div>
            </li>
          </ul>
          <div>
            <h1 className="w-full text-xl md:textNormal4 font-bold text-black mb-4">
              Позвольте нам узнать про вашу проблему - просто заполните форму
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
