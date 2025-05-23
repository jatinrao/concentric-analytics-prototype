import LoginForm from "@/components/molecules/LoginForm";
import { loadTenantList, loadTenantMap } from "../../../../../tenantConfig";
import { Tenant } from "../../../../../tenant";
import { TenantDropdown } from "@/components/molecules/TenantDropdown";
import { IntlayerClientProvider } from "next-intlayer";
import ThemeToggle from "@/components/ThemeToggle";
import { LocaleSwitcher } from "@/components/atoms/LocaleSwitcher";
import { Locales } from "intlayer";

// Update the type to make params a Promise
type LoginPageProps = {
  params: Promise<{
    tenant: string;
    locale: Locales;
  }>;
};

const LoginPage = async ({ params }: LoginPageProps) => {
  // Await the params since they're now a Promise in Next.js 15
  const { tenant, locale } = await params;
  const tenants: Record<string, Tenant> = await loadTenantMap();
  const tenantList: Tenant[] = await loadTenantList();
  console.log("root page debug", tenant, locale, tenants[tenant]);

  return (
    <div className="w-[100vw] h-[100vh] bg-secondary pt-24">
      <ThemeToggle
        primary={tenants[tenant].theme.primaryColor}
        secondary={tenants[tenant].theme.secondaryColor}
        // spacing={tenants[tenant].theme.spacing}
        radius={tenants[tenant].theme.radius}
      />
      <LocaleSwitcher tenant={tenant} />
      <IntlayerClientProvider locale={locale}>
        <div className="@xs:w-full w-[320px] h-fit flex flex-col mx-auto  border-4 border-primary rounded-elem py-12 px-6">
          <TenantDropdown
            selected={tenant}
            locale={locale}
            tenantList={tenantList}
          />
          <LoginForm tenant={tenant.toString()} locale={locale.toString()} />
        </div>
      </IntlayerClientProvider>
      {/* <div className=" text-black">
        <Link href={formatUrl(tenant, locale, `/dashboard`)}>Dashboard</Link>
      </div> */}
    </div>
  );
};

export default LoginPage;
