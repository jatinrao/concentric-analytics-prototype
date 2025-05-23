import { IntlayerServerProvider } from "next-intlayer/server";
import Header from "@/components/molecules/Header";
import { loadTenantMap } from "../../../../../tenantConfig";
import { Tenant } from "../../../../../tenant";
import { Card } from "@/components/atoms/Card";
import dynamic from "next/dynamic";
import { Locales } from "intlayer";
import { PageProps } from "../../../../../.next/types/app/layout";

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

type DashboardPageProps = {
  params: {
    tenant: string;
    locale: Locales;
  };
} & PageProps;

const DashboardPage = async ({ params }: DashboardPageProps) => {
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
            <DynamicIntegrations tenant={tenant} locale={locale} />{" "}
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
