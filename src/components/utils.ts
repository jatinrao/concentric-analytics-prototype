export const formatUrl = (tenant: string, locale: string, href: string) => {
  return `/${tenant}/${locale}${href}`;
};