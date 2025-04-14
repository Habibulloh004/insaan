// pages/index.js
import Hero from "@/components/shared/Hero";
import Architectural from "./_components/Architectural";
import Services from "./_components/Services";
import Reviews from "./_components/Reviews";
import VideoContainer from "./_components/VideoContainer";

export default function Home() {
  return (
    <main>
      <Hero
        image="homeImage.jpg"
        title="Все услуги для людей"
        description="Документация, планировка и прочие услуги в сфере строительства."
        cardTitle="Свяжитесь с нами чтобы узнать подробнее"
        cardButtonText="Связаться"
        cardButtonLink="/contact"
        imagePosition="bottom"
        gradientDirection="to-r"
        cardPosition="right-bottom"
        showCard={true}
      />
      <Architectural />
      <Services/>
      <Reviews/>
      <VideoContainer/>
    </main>
  );
}
