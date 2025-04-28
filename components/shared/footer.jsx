"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  const navLinks = [
    {
      id: 1,
      name: t("nav_link_1"),
      link: "/",
    },
    {
      id: 2,
      name: t("nav_link_2"),
      link: "/services",
    },
    {
      id: 3,
      name: t("nav_link_3"),
      link: "/about-us",
    },
    {
      id: 4,
      name: t("nav_link_4"),
      link: "/reviews",
    },
    {
      id: 5,
      name: t("nav_link_5"),
      link: "/blogs",
    },
  ];

  return (
    <footer className="relative mt-10 w-full overflow-hidden py-5">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/home/footerBack.webp"
          alt="Footer fon rasmi"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          loading="eager"
        />
      </div>
      <main className="mx-auto w-11/12 max-w-[1440px] flex flex-col md:flex-row gap-8 md:gap-4">
        {/* Logo and Navigation Section */}
        <div className="flex w-full flex-col items-center md:items-start gap-4 md:gap-3">
          <div className="mx-auto w-full max-w-sm md:mx-0">
            <Image
              src="/home/logoForHome.webp"
              alt={t("logo_alt")}
              width={200}
              height={200}
              className="aspect-[5/3] max-w-sm"
              loading="eager"
              quality={90}
            />
          </div>
          <div className="textNormal2 flex flex-wrap justify-center md:justify-start">
            {navLinks.map((link, i) => (
              <Link
                prefetch={true}
                className={cn(
                  navLinks?.length === i + 1 ? "" : "border-r-2",
                  "border-black px-2 text-black my-1"
                )}
                key={i}
                href={link?.link}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <h1 className="textNormal2 text-center md:text-left">
            {t("copyright")}
          </h1>
        </div>

        {/* Contact and Social Section */}
        <div className="flex w-full flex-col sm:flex-row justify-center md:justify-end items-center md:items-start gap-8 sm:gap-12">
          <div className="space-y-3 text-center md:text-left">
            <h1 className="font-medium">{t("contact_heading")}</h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link prefetch={true} href={"tel:+998994444004"}>
                  {t("phone_1")}
                </Link>
              </li>
              <li>
                <Link prefetch={true} href={"tel:+998981770404"}>
                  {t("phone_2")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="font-medium">{t("social_heading")}</h1>
            <ul className="flex flex-col gap-3">
              <Link
                prefetch={true}
                target="_blank"
                href="https://www.instagram.com/insaan_group?igsh=MWxzNGVmOHNheW5sYQ=="
                className="flex items-center gap-2"
              >
                <Image
                  src="/home/instagram.webp"
                  alt={t("instagram_alt")}
                  loading="eager"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  width={100}
                  height={100}
                />
                <h1>@insaan_group</h1>
              </Link>
              <Link
                prefetch={true}
                target="_blank"
                href="https://t.me/insaanuz"
                className="flex items-center gap-2"
              >
                <Image
                  src="/home/telegram.webp"
                  alt={t("telegram_alt")}
                  loading="eager"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  width={100}
                  height={100}
                />
                <h1>@insaan_group</h1>
              </Link>
              <Link
                prefetch={true}
                target="_blank"
                href="https://www.facebook.com/share/1UpmwMGHZX/?mibextid=wwXIfr"
                className="flex items-center gap-2"
              >
                <Image
                  src="/home/facebook.webp"
                  alt={t("facebook_alt")}
                  loading="eager"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  width={100}
                  height={100}
                />
                <h1>@insaan_group</h1>
              </Link>
            </ul>
          </div>
        </div>
      </main>
    </footer>
  );
}
