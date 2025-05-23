"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type { PropsWithChildren, FC } from "react";

/**
 * A custom Link component that adapts the href attribute based on the current locale.
 * For internal links, it uses `getLocalizedUrl` to prefix the URL with the locale (e.g., /fr/about).
 * This ensures that navigation stays within the same locale context.
 */

export const Link: FC<PropsWithChildren<NextLinkProps>> = ({
  href,
  children,
  ...props
}) => {
  //   const { locale } = useLocale();

  const hrefI18n: NextLinkProps["href"] = href;

  return (
    <NextLink className="text-white bg-primary" href={hrefI18n} {...props}>
      {children}
    </NextLink>
  );
};
