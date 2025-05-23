// without hooks solution
export const translations = {
  en: {
    login: {
      title: "Login to your account",
      username: "Username",
      password: "Password",
      submitButton: "LogIn",
      forgotPassword: "Forgot your password?",
      rememberMe: "Remember me",
    },
    common: {
      selectLanguage: "Select language",
    },
  },
  hi: {
    login: {
      title: "अपने खाते में लॉग इन करें",
      username: "उपयोगकर्ता नाम",
      password: "पासवर्ड",
      submitButton: "लॉग इन करें",
      forgotPassword: "अपना पासवर्ड भूल गए?",
      rememberMe: "मुझे याद रखें",
    },
    common: {
      selectLanguage: "भाषा चुनें",
    },
  },
};

// Helper function to get translations
export function getTranslation(locale: string, key: string) {
  const parts = key.split(".");
  let current = translations[locale] || translations.en;

  for (const part of parts) {
    if (current[part] === undefined) {
      return key;
    }
    current = current[part];
  }

  return current;
}
