"use client"

import Image from "next/image";
import React from "react";

export default function ServiceCard({
  title,
  description,
  image,
  priority = false,
  titleClassName = "",
  imageHeight = "h-64",
  imageQuality = 90,
  overlayColor = "bg-black/60",
  children,
}) {
  // Add custom animations for text appearance
  const fadeInUp = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.4s ease-out forwards;
    }
  `;

  React.useEffect(() => {
    // Add the animation styles to the document
    const style = document.createElement('style');
    style.textContent = fadeInUp;
    document.head.appendChild(style);
    
    return () => {
      // Clean up on unmount
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="space-y-4 flex flex-col h-full">
      {title && (
        <h2 className={`text-primary text-center text-xl font-medium ${titleClassName}`}>
          {title}
        </h2>
      )}
      
      <div 
        className={`relative rounded-2xl overflow-hidden ${imageHeight} flex-grow shadow-md group`}
        tabIndex={0} // Make it focusable
      >
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 group-focus:scale-110">
          <Image
            src={image}
            alt={title || "Service image"}
            className="object-cover w-full h-full"
            width={500}
            height={500}
            quality={imageQuality}
            priority={priority}
          />
        </div>
        
        {/* Overlay that appears on hover/focus */}
        <div 
          className={`absolute inset-0 ${overlayColor} z-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300`}
        />
        
        {/* Content that appears on hover/focus */}
        <div 
          className="absolute inset-0 z-20 p-5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
        >
          {description && (
            <p className="text-white text-center group-hover:animate-fadeInUp group-focus:animate-fadeInUp transform translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}