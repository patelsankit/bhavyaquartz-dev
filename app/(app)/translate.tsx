import React, { useEffect } from "react";

const TranslateComponent = () => {
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
              pageLanguage: "en", // Set the default page language to English
              includedLanguages: "en,es,fr,de,it,ja,ko,zh-CN,hi,th", // Include only these 10 languages
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

  return (
    <>
      <div id="google_translate_element"></div>
    </>
  );
};

export default TranslateComponent;
