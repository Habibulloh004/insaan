import Architectural from "@/app/_components/Architectural";
import VideoContainer from "@/app/_components/VideoContainer";
import Hero from "@/components/shared/Hero";
import CircleBar from "@/components/ui/circlebar";
import React from "react";
import WorkerCard from "../../../components/shared/WorkerCard";

export const workerData = [
  {
    name: "Isamuxamedov Sherzod",
    level: "Korxona rahbari",
    image: "/workers/sherzod.webp",
  },
  {
    name: "Uzoqov Davronboy",
    level: "Loyiha bosh arxitektori",
    image: "/workers/davronboy.webp",
  },
  {
    name: "Raximov Ziyovuddin",
    level: "Dizayner",
    image: "/workers/ziyovuddin.webp",
  },
  {
    name: "Xasanov lhomjon",
    level: "Loyihachi",
    image: "/workers/empty.webp",
  },
  {
    name: "Isamuxamedov Aziz",
    level: "Dasturchi",
    image: "/workers/aziz.webp",
  },
  {
    name: "Isamuxamedov Jahongir ",
    level: "Loyiha bosh muxandisi",
    image: "/workers/javohir.webp",
  },
];
export default function AboutUs() {
  return (
    <main className="space-y-12">
      <Hero
        image="aboutUsImage.webp"
        title="О нас"
        description="Подробнее о нашей фирме INSAAN"
        cardTitle="Закажите услугу сейчас"
        cardButtonText="Связаться"
        cardButtonLink="/contact"
        imagePosition="top"
        gradientDirection="to-r"
        cardPosition="right-bottom"
        showCard={false}
      />
      <Architectural workers={true} />
      <VideoContainer />
    </main>
  );
}
