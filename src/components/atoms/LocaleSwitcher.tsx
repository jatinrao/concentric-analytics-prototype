"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type LocaleSwitcherProps = {
  tenant: string;
  currentLocale: string;
  availableLocales: string[];
  selectLanguageText: string;
};

export default function LocaleSwitcher({
  tenant,
  currentLocale,
  availableLocales,
  selectLanguageText,
}: LocaleSwitcherProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    router.push(`/${tenant}/${newLocale}`);
  };

  const getLocaleName = (locale: string) => {
    return !(locale === "hi") ? "English" : "हिन्दी";
  };

  return (
    <div className="locale-switcher absolute top-4 right-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-1 bg-primary text-white rounded-lg"
      >
        {getLocaleName(currentLocale)}
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-lg overflow-hidden z-10">
          <div className="py-1 text-sm text-gray-700 border-b border-gray-200 px-3">
            {selectLanguageText}
          </div>
          <ul>
            {availableLocales.map((locale) => (
              <li key={locale} data-val={locale}>
                <button
                  onClick={(e) => {
                    console.log("currentLocale", locale, e.target);
                    handleLocaleChange(locale);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm w-full text-left text-black ${
                    currentLocale === locale
                      ? "bg-gray-100 font-medium"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {getLocaleName(locale)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
