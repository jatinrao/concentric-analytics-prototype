import type { FC } from "react";
import { IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider, useIntlayer } from "next-intlayer/server";
import { Tenant } from "../../../../tenant";
import { loadTenantMap } from "../../../../tenantConfig";
import { Locales } from "intlayer";

const PageContent: FC = () => {
  const content = useIntlayer("root");

  return (
    <>
      <p>{content.getStarted.main}</p>
      <code>{content.getStarted.pageLink}</code>
    </>
  );
};

// Update the type to make params a Promise
type IntLayerPageProps = {
  params: Promise<{
    tenant: string;
    locale: Locales;
  }>;
};

const IntLayerPage = async ({ params }: IntLayerPageProps) => {
  // Await the params since they're now a Promise in Next.js 15
  const { tenant, locale } = await params;
  const tenants: Record<string, Tenant> = await loadTenantMap();
  console.log("root page debug", tenant, locale, tenants[tenant]);

  return (
    <IntlayerServerProvider locale={locale}>
      <PageContent />
      {/* <ServerComponentTemplate /> */}

      <IntlayerClientProvider locale={locale}>
        {/* <ClientComponentTemplate /> */}
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};

export default IntLayerPage;
