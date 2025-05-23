import type { FC } from "react";
import { IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider, useIntlayer } from "next-intlayer/server";
import { Tenant } from "../../../../tenant";
import { loadTenantMap } from "../../../../tenantConfig";
import { Locales } from "intlayer";
import { PageProps } from "../../../../.next/types/app/layout";

const PageContent: FC = () => {
  const content = useIntlayer("root");

  return (
    <>
      <p>{content.getStarted.main}</p>
      <code>{content.getStarted.pageLink}</code>
    </>
  );
};

type IntLayerPageProps = {
  params: {
    tenant: string;
    locale: Locales;
  };
} & PageProps;

const IntLayerPage = async ({ params }: IntLayerPageProps) => {
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
