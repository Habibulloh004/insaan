"use client";

import { cn, navLinks } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "next-intl";

export default function Header() {
  const handleLanguageChange = (newLocale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    window.location.href = window.location.origin + window.location.pathname;
  };

  const locale = useLocale();
  const pathname = usePathname();

  return (
    <main className="sticky top-0 left-0 w-full h-20 z-[900] bg-white shadow-sm">
      <section className="h-full flex justify-between items-center gap-4 container mx-auto w-11/12">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="lg:hidden cursor-pointer">
            <AlignJustify className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left" className="z-[999] p-6">
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <Image
                    src="/assets/logo.webp"
                    alt="logo"
                    width={80}
                    height={40}
                    loading="eager"
                    className="object-contain"
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col mt-6 gap-4">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link?.link}
                  className={cn(
                    "text-md",
                    pathname == link?.link
                      ? "font-bold text-primary"
                      : "font-[400] text-black"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="text-md font-bold text-black">
                Связаться с нами
              </Link>
              <LanguageSwitcher
                value={locale}
                onChange={handleLanguageChange}
              />
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link
          href="/"
          className="cursor-pointer max-lg:w-full h-full flex justify-center lg:justify-start items-center"
        >
          <Image
            height={100}
            width={100}
            className="w-20 h-16 object-contain"
            src="/assets/logo.webp"
            alt="logo"
            loading="eager"
          />
        </Link>
        <Link href="/contact" className="lg:hidden text-end font-bold text-black">
          Связаться с нами
        </Link>
        {/* Desktop Nav */}
        <section className="max-lg:hidden flex items-center gap-4">
          <nav className="text-md lg:text-lg 2xl:text-xl flex justify-start items-center gap-7">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link?.link}
                className={cn(
                  "text-black",
                  pathname == link?.link ? "font-bold" : "font-[400]"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="font-bold text-black">
              Связаться с нами
            </Link>
          </nav>

          <LanguageSwitcher value={locale} onChange={handleLanguageChange} />
        </section>
      </section>
    </main>
  );
}
