import type { FC } from "react";
import { type NextPageIntlayer, IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider, useIntlayer } from "next-intlayer/server";
import { ServerComponentTemplate } from "@/components/atoms/ServerComponentTemplate";
import { ClientComponentTemplate } from "@/components/atoms/ClientComponentTemplate";
import { Tenant } from "../../../../tenant";
import { loadTenantMap } from "../../../../tenantConfig";

const PageContent: FC = () => {
  const content = useIntlayer("root");

  return (
    <>
      <p>{content.getStarted.main}</p>
      <code>{content.getStarted.pageLink}</code>
    </>
  );
};

const Page: NextPageIntlayer = async ({ params }) => {
  const { tenant, locale } = await params;
  const tenants: Record<string, Tenant> = await loadTenantMap();
  console.log("root page debug", tenant, locale, tenants[tenant]);

  return (
    <IntlayerServerProvider locale={locale}>
      <PageContent />
      <ServerComponentTemplate />

      <IntlayerClientProvider locale={locale}>
        <ClientComponentTemplate />
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};

export default Page;
