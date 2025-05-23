// app/[tenant]/[locale]/layout.tsx
import type { NextLayoutIntlayer } from "next-intlayer";
import { getHTMLTextDir } from "intlayer";
import { Inter } from "next/font/google";

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

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;

  return (
    <div dir={getHTMLTextDir(locale)} className={`${inter.className}`}>
      {children}
    </div>
  );
};

export default LocaleLayout;
