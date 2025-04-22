// components/shared/Hero.jsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero({
  image,
  title,
  description,
  cardTitle,
  cardButtonText = "Связаться",
  cardButtonLink = "/contact",
  imagePosition = "bottom",
  gradientDirection = "to-r",
  gradientFrom = "white",
  gradientTo = "transparent",
  textColor = "primary",
  cardPosition = "right-bottom",
  showCard = true,
}) {
  // Function to determine card positioning classes
  const getCardPositionClasses = () => {
    switch (cardPosition) {
      case "right-bottom":
        return "right-4 bottom-4 sm:right-10 sm:bottom-10";
      case "left-bottom":
        return "left-4 bottom-4 sm:left-10 sm:bottom-10";
      case "right-top":
        return "right-4 top-4 sm:right-10 sm:top-10";
      case "left-top":
        return "left-4 top-4 sm:left-10 sm:top-10";
      case "center-bottom":
        return "inset-x-0 bottom-4 sm:bottom-10 mx-auto";
      default:
        return "right-4 bottom-4 sm:right-10 sm:bottom-10";
    }
  };

  return (
    <main className="relative min-h-[250px] md:h-[calc(100vh-80px)]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={`/assets/${image}`}
          alt={title || "Hero background"}
          layout="fill"
          objectFit="cover"
          objectPosition={imagePosition}
          priority
          loading="eager"
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-white to-transparent`}
      ></div>

      {/* Hero Content */}
      <section className="max-w-[1440px] w-11/12 mx-auto relative h-full py-10">
        {/* Title & description */}
        <div className="w-2/3 md:w-1/2 relative z-10 h-full flex justify-center items-start flex-col gap-4 text-black">
          <h1 className={`textBig3 max-sm:text-xl max-md:text-4xl font-bold text-${textColor}`}>
            {title}
          </h1>
          <p className={`textNormal4 max-md:text-md max-sm:text-sm text-${textColor}`}>
            {description}
          </p>
        </div>
      </section>

      {/* Card section */}
      {showCard && (
        <div className={`z-20 bg-white/80 absolute ${getCardPositionClasses()} rounded-md p-3 md:p-6 text-primary flex text-center items-center flex-col gap-2`}>
          <h1 className="text-center textSmall3 w-[120px] md:w-[250px]">
            {cardTitle}
          </h1>
          <Link href={cardButtonLink}>
            <button className="px-5 cursor-pointer py-3 bg-primary text-white rounded-sm textSmall3 font-bold">
              {cardButtonText}
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}