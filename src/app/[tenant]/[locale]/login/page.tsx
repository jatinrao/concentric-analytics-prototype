import { loadTenantList, loadTenantMap } from "../../../../../tenantConfig";
import { Tenant } from "../../../../../tenant";
import LoginForm from "@/components/molecules/LoginForm";
import { TenantDropdown } from "@/components/molecules/TenantDropdown";
import ThemeToggle from "@/components/ThemeToggle";
import { Suspense } from "react";
import LocaleSwitcherWrapper from "@/components/atoms/LocaleSwitcherWrapper";
import { getTranslation } from "@/components/translators/LoginTranslator";

interface LoginPageProps {
  params: Promise<{ tenant: string; locale: string }>;
}
export default async function LoginPage({ params }: LoginPageProps) {
  const { tenant, locale } = await params;
  const tenants: Record<string, Tenant> = await loadTenantMap();
  const tenantList: Tenant[] = await loadTenantList();

  // Get translations without hooks
  const translations = {
    title: getTranslation(locale, "login.title"),
    username: getTranslation(locale, "login.username"),
    password: getTranslation(locale, "login.password"),
    submitButton: getTranslation(locale, "login.submitButton"),
    forgotPassword: getTranslation(locale, "login.forgotPassword"),
    rememberMe: getTranslation(locale, "login.rememberMe"),
    selectLanguage: getTranslation(locale, "common.selectLanguage"),
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-secondary pt-24">
      <ThemeToggle
        primary={tenants[tenant].theme.primaryColor}
        secondary={tenants[tenant].theme.secondaryColor}
        radius={tenants[tenant].theme.radius}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <LocaleSwitcherWrapper
          tenant={tenant}
          currentLocale={locale}
          selectLanguageText={translations.selectLanguage}
          availableLocales={["en", "hi"]}
        />
      </Suspense>

      <div className="@xs:w-full w-[320px] h-fit flex flex-col mx-auto border-4 border-primary rounded-elem py-6 px-6">
        <h3 className="text-black m-auto">{translations.title}</h3>
        <TenantDropdown
          selected={tenant}
          locale={locale}
          tenantList={tenantList}
        />

        <LoginForm
          tenant={tenant.toString()}
          locale={locale.toString()}
          translations={translations}
        />
      </div>
    </div>
  );
}
