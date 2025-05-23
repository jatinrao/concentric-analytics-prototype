import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.HINDI_INDIA,
    ],
    defaultLocale: Locales.ENGLISH,
  },
};

export default config;