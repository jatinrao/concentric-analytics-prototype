// import type { NextLayoutIntlayer } from "next-intlayer";
// import { getHTMLTextDir } from "intlayer";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

// export { generateStaticParams } from "next-intlayer";

const inter = Inter({ subsets: ["latin"] });
export async function generateStaticParams() {
  return [
    { tenant: "orgA", locale: "en" },
    { tenant: "orgB", locale: "en" },
    { tenant: "orgB", locale: "hi" },
    { tenant: "orgA", locale: "hi" },
    // add all valid combinations you want to serve statically
  ];
}

const LocaleLayout = async ({ children }: PropsWithChildren) => {
  // const { locale } = await params;

  return <div className={`${inter.className}`}>{children}</div>;
};

export default LocaleLayout;
