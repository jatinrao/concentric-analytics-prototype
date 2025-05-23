import { t, type Dictionary } from "intlayer";

const loginContent = {
  key: "login",
  content: {
    form: {
      title: t({
        en: "Login to your account",
        hi: "अपने खाते में लॉग इन करें"
      }),
      username: t({
        en: "Username",
        hi: "उपयोगकर्ता नाम"
      }),
      password: t({
        en: "Password",
        hi: "पासवर्ड"
      }),
      submitButton: t({
        en: "Sign In",
        hi: "साइन इन करें"
      }),
      forgotPassword: t({
        en: "Forgot your password?",
        hi: "अपना पासवर्ड भूल गए?"
      }),
      rememberMe: t({
        en: "Remember me",
        hi: "मुझे याद रखें"
      })
    },
    language: {
      selectLanguage: t({
        en: "Select language",
        hi: "भाषा चुनें"
      })
    }
  }
} satisfies Dictionary;

export default loginContent;