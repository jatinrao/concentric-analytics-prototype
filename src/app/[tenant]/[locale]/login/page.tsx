import LoginForm from "@/components/molecules/LoginForm";
import { loadTenantList, loadTenantMap } from "../../../../../tenantConfig";
import { Tenant } from "../../../../../tenant";
import { NextPage } from "next";
import { formatUrl } from "@/components/utils";
import { Link } from "@/components/atoms/Link";
import { TenantDropdown } from "@/components/molecules/TenantDropdown";
import { NextPageIntlayer } from "next-intlayer";
import ThemeToggle from "@/app/ThemeToggle";

const LoginPage: NextPageIntlayer = async ({ params }) => {
  const { tenant, locale } = await params;
  const tenants: Record<string, Tenant> = await loadTenantMap();
  const tenantList: Tenant[] = await loadTenantList();
  console.log("root page debug", tenant, locale, tenants[tenant]);

  return (
    <div>
      <ThemeToggle
        primary={tenants[tenant].theme.primaryColor}
        secondary={tenants[tenant].theme.secondaryColor}
      />
      <div>
        <TenantDropdown
          selected={tenant}
          locale={locale}
          tenantList={tenantList}
        />
        <LoginForm tenant={tenant.toString()} locale={locale.toString()} />
      </div>
      {/* <div className=" text-black">
        <Link href={formatUrl(tenant, locale, `/dashboard`)}>Dashboard</Link>
      </div> */}
    </div>
  );
};

export default LoginPage;
