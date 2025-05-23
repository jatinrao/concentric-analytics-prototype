import { IntlayerServerProvider } from "next-intlayer/server";
import Header from "@/components/molecules/Header";
import { loadTenantMap } from "../../../../../tenantConfig";
import { Tenant } from "../../../../../tenant";
import { Card } from "@/components/atoms/Card";
import dynamic from "next/dynamic";
import { Locales } from "intlayer";

const DynamicCharts = dynamic(() => import("@/components/molecules/Charts"), {
  loading: () => (
    <Card>
      <p>Loading...</p>
    </Card>
  ),
});

const DynamicIntegrations = dynamic(
  () => import("@/components/molecules/Integrations"),
  {
    loading: () => (
      <Card>
        <p>Loading...</p>
      </Card>
    ),
  }
);

const DynamicUsers = dynamic(() => import("@/components/molecules/Users"), {
  loading: () => (
    <Card>
      <p>Loading...</p>
    </Card>
  ),
});

export type PageProps = {
  params: Promise<{ [key: string]: string }>;
};

const DashboardPage = async ({
  params,
}: {
  params: Promise<{ tenant: string; locale: Locales }>;
}) => {
  // Await the params since they're now a Promise in Next.js 15
  const { tenant, locale } = await params;
  const tenants: Record<string, Tenant> = await loadTenantMap();

  return (
    <IntlayerServerProvider locale={locale}>
      <Header tenant={tenant} locale={locale} />
      <div className="bg-secondary flex flex-col">
        {tenants[tenant].features?.includes("charts") && (
          <Card>
            <DynamicCharts tenant={tenant} locale={locale} />
          </Card>
        )}

        {tenants[tenant].features?.includes("integrations") && (
          <Card>
            <DynamicIntegrations tenant={tenant} locale={locale} />
          </Card>
        )}

        {tenants[tenant].features?.includes("users") && (
          <Card>
            <DynamicUsers tenant={tenant} locale={locale} />
          </Card>
        )}
      </div>
    </IntlayerServerProvider>
  );
};

export default DashboardPage;
