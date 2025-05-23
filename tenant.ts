export interface TenantTheme {
    primaryColor:string,
    secondaryColor:string,
    font?:string,
}
export type Email = `${string}@${string}.${string}`;

export type Feature = "charts" | "integrations" | "notifications" | "manage-users";

export interface Tenant {
    tenantId:string;
    tenantUserName:string;
    tenantName:string;
    defaultLocale:string;
    tenantEmail?:Email;
    isAdmin?:boolean;
    logoUrl:string;
    theme:TenantTheme;
    features:Feature[];
}