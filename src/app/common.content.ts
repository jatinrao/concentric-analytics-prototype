import { t, type Dictionary } from "intlayer";

const commonContent = {
  key: "common",
  content: {
    navigation: {
      home: t({
        en: "Home",
        hi: "होम"
      }),
      dashboard: t({
        en: "Dashboard",
        hi: "डैशबोर्ड"
      }),
      logout: t({
        en: "Logout",
        hi: "लॉगआउट"
      })
    },
    actions: {
      save: t({
        en: "Save",
        hi: "सहेजें"
      }),
      cancel: t({
        en: "Cancel",
        hi: "रद्द करें"
      }),
      confirm: t({
        en: "Confirm",
        hi: "पुष्टि करें"
      }),
     
    },
    // language:{
    // selectLanguage: t({
    //     en: "English",
    //     hi: "Hindi"
    //   }),
    // }
  }
} satisfies Dictionary;

export default commonContent;