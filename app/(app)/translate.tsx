import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown";
import { IconWorld } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const languages = {
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
  "zh-CN": "Chinese (Simplified)",
  hi: "Hindi",
  th: "Thai",
};

const TranslateComponent = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const clearGoogleTranslateStorage = () => {
      localStorage.removeItem("googtrans");
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    };

    const addGoogleTranslateScript = () => {
      if (
        !document.querySelector(
          'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
        )
      ) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;

        window.googleTranslateElementInit = function () {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: Object.keys(languages).join(","),
              autoDisplay: false,
            },
            "google_translate_element"
          );
        };

        document.body.appendChild(script);

        script.onerror = () => {
          console.error("Google Translate script could not be loaded.");
        };
      }
    };

    clearGoogleTranslateStorage();
    addGoogleTranslateScript();
  }, []);
  useEffect(() => {
    const changeLanguage = (lang: string) => {
      const googleTranslateSelect = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;
      if (googleTranslateSelect) {
        googleTranslateSelect.value = lang;
        googleTranslateSelect.dispatchEvent(new Event("change"));
      }
    };

    changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="btn btn-primary py-1.5 px-2 sm:px-2.5 rounded-md sm:rounded-medium ab-solute right-16 top-3 h-8 sm:h-10 z-[999] flex gap-1.5 items-center focus-visible:outline-none notranslate">
          <IconWorld className="h-4 sm:h-5 w-4 sm:w-5" />
          {/* {languages[selectedLanguage]} */}
          {selectedLanguage}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-[999] !p-0 font-inter">
          <DropdownMenuLabel className="!text-14">
            Select Language
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Object.entries(languages).map(([code, name]) => (
            <DropdownMenuItem
              className="notranslate hover:bg-primary/30 !text-14"
              key={code}
              onClick={() => handleLanguageChange(code)}
            >
              {name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div id="google_translate_element" style={{ display: "none" }}></div>
    </>
  );
};

export default TranslateComponent;
