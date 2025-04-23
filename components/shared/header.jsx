"use client";

import { cn, navLinks } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <main className=" sticky top-0 left-0 w-full h-20 z-[900] bg-white">
      <section className="h-full flex justify-between items-center gap-4 container mx-auto w-11/12">
        <Sheet>
          <SheetTrigger className="lg:hidden w-2/3 sm:w-full cursor-pointer h-full">
            <div className="w-full block lg:hidden">
              <AlignJustify />
            </div>
          </SheetTrigger>
          <SheetContent side="left" className={"z-[999]"}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Link
          prefetch={true}
          href={"/"}
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
        <section className="max-lg:w-full flex justify-end items-center gap-4">
          <nav className="hidden text-md lg:text-lg 2xl:text-xl lg:flex justify-start items-center gap-7">
            {navLinks.map((link, i) => {
              return (
                <Link
                  prefetch={true}
                  className={cn(
                    "text-black",
                    pathname == link?.link ? "font-bold" : "font-[400] "
                  )}
                  key={i}
                  href={link?.link}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <Link
            prefetch={true}
            href={"/contact"}
            className="text-black text-end font-bold text-md lg:text-lg 2xl:text-xl"
          >
            Связаться с нами
          </Link>
        </section>
      </section>
    </main>
  );
}
