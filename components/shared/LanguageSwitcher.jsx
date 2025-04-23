"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const LanguageSwitcher = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", label: "English", flag: "/flags/en.webp" },
    { code: "uz", label: "O‘zbek", flag: "/flags/uz.webp" },
    { code: "ru", label: "Русский", flag: "/flags/ru.webp" },
  ];

  const selectedLanguage = languages.find((lang) => lang.code === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-black/20 text-black bg-white/10 p-2 text-sm hover:bg-white/20 transition-colors"
      >
        {selectedLanguage && (
          <>
            <Image
              width={100}
              height={100}
              src={selectedLanguage.flag}
              alt={selectedLanguage.label}
              className="h-5 w-5 rounded-full object-cover"
            />
            <span className="lg:hidden">{selectedLanguage.label}</span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md border border-white/20 bg-primary/30 backdrop-blur-xl shadow-lg z-50">
          {languages.map(({ code, label, flag }) => (
            <button
              key={code}
              onClick={() => {
                onChange(code);
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
            >
              <img
                src={flag}
                alt={label}
                className="h-5 w-5 rounded-full object-cover"
              />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
