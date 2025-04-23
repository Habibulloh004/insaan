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
    image: "/workers/sherzod.png",
  },
  {
    name: "Uzoqov Davronboy",
    level: "Loyiha bosh arxitektori",
    image: "/workers/davronboy.png",
  },
  {
    name: "Raximov Ziyovuddin",
    level: "Dizayner",
    image: "/workers/ziyovuddin.png",
  },
  {
    name: "Xasanov lhomjon",
    level: "Loyihachi",
    image: "/workers/empty.jpg",
  },
  {
    name: "Isamuxamedov Aziz",
    level: "Dasturchi",
    image: "/workers/aziz.png",
  },
  {
    name: "Isamuxamedov Jahongir ",
    level: "Loyiha bosh muxandisi",
    image: "/workers/javohir.png",
  },
];
export default function AboutUs() {
  return (
    <main className="space-y-12">
      <Hero
        image="aboutUsImage.jpg"
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
