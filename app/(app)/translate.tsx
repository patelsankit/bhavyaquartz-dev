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

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/Dropdown";
// import { IconWorld } from "@tabler/icons-react";
// import React, { useEffect, useState } from "react";

// const languages = {
//   af: "Afrikaans",
//   sq: "Albanian",
//   am: "Amharic",
//   ar: "Arabic",
//   hy: "Armenian",
//   az: "Azerbaijani",
//   eu: "Basque",
//   be: "Belarusian",
//   bn: "Bengali",
//   bs: "Bosnian",
//   bg: "Bulgarian",
//   ca: "Catalan",
//   "zh-CN": "Chinese (Simplified)",
//   "zh-TW": "Chinese (Traditional)",
//   hr: "Croatian",
//   cs: "Czech",
//   da: "Danish",
//   nl: "Dutch",
//   en: "English",
//   eo: "Esperanto",
//   et: "Estonian",
//   tl: "Filipino",
//   fi: "Finnish",
//   fr: "French",
//   gl: "Galician",
//   ka: "Georgian",
//   de: "German",
//   el: "Greek",
//   gu: "Gujarati",
//   ht: "Haitian Creole",
//   ha: "Hausa",
//   he: "Hebrew",
//   hi: "Hindi",
//   hu: "Hungarian",
//   is: "Icelandic",
//   ig: "Igbo",
//   id: "Indonesian",
//   ga: "Irish",
//   it: "Italian",
//   ja: "Japanese",
//   kn: "Kannada",
//   kk: "Kazakh",
//   km: "Khmer",
//   ko: "Korean",
//   ku: "Kurdish",
//   ky: "Kyrgyz",
//   lo: "Lao",
//   lv: "Latvian",
//   lt: "Lithuanian",
//   lb: "Luxembourgish",
//   mk: "Macedonian",
//   mg: "Malagasy",
//   ms: "Malay",
//   ml: "Malayalam",
//   mt: "Maltese",
//   mi: "Maori",
//   mr: "Marathi",
//   mn: "Mongolian",
//   my: "Myanmar (Burmese)",
//   ne: "Nepali",
//   no: "Norwegian",
//   ny: "Nyanja (Chichewa)",
//   fa: "Persian",
//   pl: "Polish",
//   pt: "Portuguese",
//   pa: "Punjabi",
//   ro: "Romanian",
//   ru: "Russian",
//   sm: "Samoan",
//   gd: "Scottish Gaelic",
//   sr: "Serbian",
//   sn: "Shona",
//   sd: "Sindhi",
//   si: "Sinhala",
//   sk: "Slovak",
//   sl: "Slovenian",
//   so: "Somali",
//   es: "Spanish",
//   su: "Sundanese",
//   sw: "Swahili",
//   sv: "Swedish",
//   tg: "Tajik",
//   ta: "Tamil",
//   te: "Telugu",
//   th: "Thai",
//   tr: "Turkish",
//   uk: "Ukrainian",
//   ur: "Urdu",
//   uz: "Uzbek",
//   vi: "Vietnamese",
//   cy: "Welsh",
//   fy: "Western Frisian",
//   xh: "Xhosa",
//   yi: "Yiddish",
//   yo: "Yoruba",
//   zu: "Zulu",
// };

// const TranslateComponent = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState("en");
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const clearGoogleTranslateStorage = () => {
//       localStorage.removeItem("googtrans");
//       document.cookie =
//         "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     };

//     const addGoogleTranslateScript = () => {
//       if (
//         !document.querySelector(
//           'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
//         )
//       ) {
//         const script = document.createElement("script");
//         script.src =
//           "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//         script.async = true;

//         window.googleTranslateElementInit = function () {
//           new window.google.translate.TranslateElement(
//             {
//               pageLanguage: "en",
//               includedLanguages: Object.keys(languages).join(","),
//               autoDisplay: false,
//             },
//             "google_translate_element"
//           );
//         };

//         document.body.appendChild(script);

//         script.onerror = () => {
//           console.error("Google Translate script could not be loaded.");
//         };
//       }
//     };

//     clearGoogleTranslateStorage();
//     addGoogleTranslateScript();
//   }, []);

//   useEffect(() => {
//     const changeLanguage = (lang: string) => {
//       const googleTranslateSelect = document.querySelector(
//         ".goog-te-combo"
//       ) as HTMLSelectElement;
//       if (googleTranslateSelect) {
//         googleTranslateSelect.value = lang;
//         googleTranslateSelect.dispatchEvent(new Event("change"));
//       }
//     };

//     changeLanguage(selectedLanguage);
//   }, [selectedLanguage]);

//   const handleLanguageChange = (lang: string) => {
//     setSelectedLanguage(lang);
//   };

//   const filteredLanguages = Object.entries(languages).filter(([code, name]) =>
//     name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <DropdownMenu>
//         <DropdownMenuTrigger className="btn btn-primary py-1.5 px-2 sm:px-2.5 rounded-md sm:rounded-medium ab-solute right-16 top-3 h-8 sm:h-10 z-[999] flex gap-1.5 items-center focus-visible:outline-none notranslate">
//           <IconWorld className="h-4 sm:h-5 w-4 sm:w-5" />
//           {/* {languages[selectedLanguage]} */}
//           {selectedLanguage}
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="z-[999] !p-0 font-inter">
//           <DropdownMenuLabel className="!text-14">
//             Select Language
//           </DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <div className="p-2">
//             <input
//               type="text"
//               placeholder="Search language"
//               className="w-full p-2 text-sm border rounded-md"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <DropdownMenuSeparator />
//           <div className=" max-h-96 overflow-y-auto">
//             {filteredLanguages.map(([code, name]) => (
//               <DropdownMenuItem
//                 className="notranslate hover:bg-primary/30 !text-14"
//                 key={code}
//                 onClick={() => handleLanguageChange(code)}
//               >
//                 {name}
//               </DropdownMenuItem>
//             ))}
//           </div>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       <div id="google_translate_element" style={{ display: "none" }}></div>
//     </>
//   );
// };

// export default TranslateComponent;
