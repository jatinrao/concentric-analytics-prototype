import { t, type Dictionary } from "intlayer";

const moleculesContent = {
  key: "login",
  content: {
    title:"tenant-atoms",
    appName:t({
        en:"Concentric Analytics",
        hi:"कंसेंट्रिक एनालिटिक्स",
    }),
    pageNotFoundErr:t({
        en:"404: Requested page doesn't exist",
        hi:"404: अनुरोधित पृष्ठ मौजूद नहीं है",
    }),
    getStarted: {
      main: t({
        en: "Get started by Loging in...",
        hi:"लॉग इन करके आरंभ करें...",
      }),
    //   pageLink: "src/app/page.tsx",
    },
  },
} satisfies Dictionary;

export default moleculesContent;