import { Tenant } from "../../tenant";

export const tenantData : Record<string,Tenant> = {
    
    "orgA": {
    "tenantId":"orgA",
    "tenantUserName":"org-a",
    "tenantName":"Organisation A",
    "defaultLocale":"en-US",
    "tenantEmail":"data@org-a.com",
    "isAdmin":false,
    "logoUrl":"https://placehold.co/600x400/000000/FFF",
    "theme":{
        "primaryColor":"#ffa450",
        "secondaryColor":"#dfdfdf",
        "font":"Rubik",
         "spacing":"4px",
        "radius":"16px"
    },
    "features":["charts"]
},
 "orgB": {
    "tenantId":"orgB",
    "tenantUserName":"org-b",
    "tenantName":"Organisation B",
    "defaultLocale":"en-US",
    "tenantEmail":"data@org-a.com",
    "isAdmin":false,
    "logoUrl":"https://placehold.co/600x400/orange/white",
    "theme":{
        "primaryColor":"#dfdfdf",
        "secondaryColor":"#ffa450",
        "font":"Rubik",
        "spacing":"2px",
        "radius":"8px"
    },
    "features":["charts","users","notifications"]
}

}