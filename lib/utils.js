import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  {
    id: 1,
    name: "Главная страница",
    link: "/",
  },
  {
    id: 2,
    name: "Услуги",
    link: "/services",
  },
  {
    id: 3,
    name: "О нас",
    link: "/about-us",
  },
  {
    id: 4,
    name: "Отзывы",
    link: "/reviews",
  },
  {
    id: 5,
    name: "Блог",
    link: "/blogs",
  },
];
