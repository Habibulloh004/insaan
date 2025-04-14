"use client";

import { cn, navLinks } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative mt-10 w-full overflow-hidden py-5">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/home/footerBack.png"
          alt="Footer background"
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
              src="/home/logoForHome.png"
              alt="Логотип INSAAN"
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
            © 2025 INSAAN. Barcha huquqlar himoyalangan.
          </h1>
        </div>

        {/* Contact and Social Section */}
        <div className="flex w-full flex-col sm:flex-row justify-center md:justify-end items-center md:items-start gap-8 sm:gap-12">
          <div className="space-y-3 text-center md:text-left">
            <h1 className="font-medium">Aloqa uchun:</h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={"tel:+998994444004"}>+998 (99) 444-40-04</Link>
              </li>
              <li>
                <Link href={"tel:+998981770404"}>+998 (98) 177-04-04</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="font-medium">Ijtimoiy tarmoqlar:</h1>
            <ul className="flex flex-col gap-3">
              <Link href="" className="flex items-center gap-2">
                <Image
                  src="/home/instagram.png"
                  alt="Instagram"
                  loading="eager"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  width={100}
                  height={100}
                />
                <h1>@insaan_company</h1>
              </Link>
              <Link href="" className="flex items-center gap-2">
                <Image
                  src="/home/telegram.png"
                  alt="Telegram"
                  loading="eager"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  width={100}
                  height={100}
                />
                <h1>@insaan_company</h1>
              </Link>
              <Link href="" className="flex items-center gap-2">
                <Image
                  src="/home/facebook.png"
                  alt="Facebook"
                  loading="eager"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  width={100}
                  height={100}
                />
                <h1>@insaan_company</h1>
              </Link>
            </ul>
          </div>
        </div>
      </main>
    </footer>
  );
}
