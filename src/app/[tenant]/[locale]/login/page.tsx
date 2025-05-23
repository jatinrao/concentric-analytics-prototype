import LoginForm from "@/components/molecules/LoginForm";
import { loadTenantMap } from "../../../../../tenantConfig";
import { Tenant } from "../../../../../tenant";
import { NextPage } from "next";
import { formatUrl } from "@/components/utils";
import { Link } from "@/components/atoms/Link";
import { TenantDropdown } from "@/components/molecules/TenantDropdown";
import { NextPageIntlayer } from "next-intlayer";

const LoginPage: NextPageIntlayer = async ({ params }) => {
  const { tenant, locale } = await params;
  const tenants: Record<string, Tenant> = await loadTenantMap();
  console.log("root page debug", tenant, locale, tenants[tenant]);

  return (
    <div>
      <TenantDropdown selected={tenant} locale={locale} />
      <LoginForm tenant={tenant.toString()} locale={locale.toString()} />
      <div>
        <Link href={formatUrl(tenant, locale, `/dashboard`)}>Dashboard</Link>
      </div>
    </div>
  );
};

export default LoginPage;
