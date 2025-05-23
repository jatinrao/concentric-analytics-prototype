export interface TenantTheme {
    primaryColor:string;
    secondaryColor:string;
    font?:string;
    radius:string;
    spacing:string;
}
export type Email = `${string}@${string}.${string}`;

export type Feature = "charts" | "integrations" | "notifications" | "users";

export interface Tenant {
    id?:string;
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