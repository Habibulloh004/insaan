"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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
import { useLocale, useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
      name: t("nav_link_6"),
      link: "/construction",
    },
    {
      id: 4,
      name: t("nav_link_3"),
      link: "/about-us",
    },
    {
      id: 5,
      name: t("nav_link_4"),
      link: "/reviews",
    },
    {
      id: 6,
      name: t("nav_link_5"),
      link: "/blogs",
    },
  ];

  const handleLanguageChange = (newLocale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    window.location.href = window.location.origin + window.location.pathname;
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Closing the sheet when a link is clicked
  };

  return (
    <main className="sticky top-0 left-0 w-full h-20 z-[900] bg-white shadow-sm">
      <section className="h-full flex justify-between items-center gap-4 container mx-auto w-11/12">
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="lg:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
            <AlignJustify className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left" className="z-[999] p-6">
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <Image
                    src="/assets/logo.webp"
                    alt={t("logo_alt")}
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
                  onClick={handleLinkClick} // Closing the sheet on link click
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="text-md font-bold text-black" onClick={handleLinkClick}>
                {t("contact_link")}
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link
          href="/"
          className="cursor-pointer  h-full flex justify-center lg:justify-start items-center"
        >
          <Image
            height={100}
            width={100}
            className="w-20 h-16 object-contain"
            src="/assets/logo.webp"
            alt={t("logo_alt")}
            loading="eager"
          />
        </Link>
        <div className="lg:hidden">
          <LanguageSwitcher value={locale} onChange={handleLanguageChange} />
        </div>

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
              {t("contact_link")}
            </Link>
          </nav>

          <LanguageSwitcher value={locale} onChange={handleLanguageChange} />
        </section>
      </section>
    </main>
  );
}
