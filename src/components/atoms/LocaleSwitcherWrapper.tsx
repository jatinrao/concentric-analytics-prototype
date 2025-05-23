import LocaleSwitcher from "./LocaleSwitcher";

type LocaleSwitcherWrapperProps = {
  tenant: string;
  currentLocale: string;
  selectLanguageText: string;
  availableLocales?: string[];
};

export default function LocaleSwitcherWrapper({
  tenant,
  currentLocale,
  selectLanguageText,
  availableLocales = ["en", "hi"],
}: LocaleSwitcherWrapperProps) {
  return (
    <LocaleSwitcher
      tenant={tenant}
      currentLocale={currentLocale}
      availableLocales={availableLocales}
      selectLanguageText={selectLanguageText}
    />
  );
}
