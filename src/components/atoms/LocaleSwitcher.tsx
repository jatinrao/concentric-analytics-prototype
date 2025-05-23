"use client";

import { getLocaleName, getLocalizedUrl } from "intlayer";
import { useLocale } from "next-intlayer";
import Link from "next/link";
import { formatUrl } from "../utils";
import { useRouter } from "next/navigation";

export const LocaleSwitcher = ({ tenant }: { tenant: string }) => {
  const { locale, pathWithoutLocale, availableLocales, setLocale } =
    useLocale();
  const router = useRouter();

  return (
    <div>
      <button popoverTarget="localePopover">{getLocaleName(locale)}</button>
      <div id="localePopover" popover="auto">
        {availableLocales.map((localeItem) => (
          <Link
            href={getLocalizedUrl(pathWithoutLocale, localeItem)}
            key={localeItem}
            aria-current={locale === localeItem ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              router.push(formatUrl(tenant, localeItem, "/login"));
              setLocale(localeItem);
            }}
          >
            {localeItem}
          </Link>
        ))}
      </div>
    </div>
  );
};
