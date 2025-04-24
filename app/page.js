import Hero from "@/components/shared/Hero";
import Architectural from "./_components/Architectural";
import Services from "./_components/Services";
import Reviews from "./_components/Reviews";
import VideoContainer from "./_components/VideoContainer";
import { getTranslations } from "next-intl/server";

// export const dynamic = "force-static";

export default async function Home() {
  const heroT = await getTranslations("HomePage.Hero");

  return (
    <main>
      <Hero
        image="homeImage.webp"
        title={heroT("title")}
        description={heroT("desc")}
        cardTitle={heroT("contact_title")}
        cardButtonText={heroT("contact_btn")}
        cardButtonLink="/contact"
        imagePosition="bottom"
        gradientDirection="to-r"
        cardPosition="right-bottom"
        showCard={true}
      />
      <Architectural />
      <Services />
      <Reviews />
      <VideoContainer />
    </main>
  );
}
