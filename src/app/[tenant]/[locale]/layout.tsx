// app/[tenant]/[locale]/layout.tsx
import type { NextLayoutIntlayer } from "next-intlayer";
import { getHTMLTextDir } from "intlayer";
import { Inter } from "next/font/google";

export { generateStaticParams } from "next-intlayer";

const inter = Inter({ subsets: ["latin"] });

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;

  return (
    <div dir={getHTMLTextDir(locale)} className={`${inter.className}`}>
      {children}
    </div>
  );
};

export default LocaleLayout;
