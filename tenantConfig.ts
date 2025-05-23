import fs from 'fs/promises';
import path from 'path';
import { statSync } from 'fs';
import { Tenant } from './tenant';
import { v4 as uuidv4 } from 'uuid';

function getTenantId(): string {
  return uuidv4();
}

// Fallback configuration in case file loading fails
const fallbackConfig: Record<string, Tenant> = {
  orgA: {
    tenantId: 'orgA',
    tenantUserName: 'org-a',
    tenantName: 'Organisation A',
    defaultLocale: 'en-US',
    tenantEmail: 'data@org-a.com',
    isAdmin: false,
    logoUrl: 'https://placehold.co/600x400/000000/FFF',
    theme: {
      primaryColor: '#ffa450',
      secondaryColor: '#dfdfdf',
      font: 'Rubik',
      spacing: '4px',
      radius: '16px'
    },
    features: ['charts']
  },
  orgB: {
    tenantId: 'orgB',
    tenantUserName: 'org-b',
    tenantName: 'Organisation B',
    defaultLocale: 'en-US',
    tenantEmail: 'data@org-b.com',
    isAdmin: false,
    logoUrl: 'https://placehold.co/600x400/orange/white',
    theme: {
      primaryColor: '#dfdfdf',
      secondaryColor: '#ffa450',
      font: 'Rubik',
      spacing: '2px',
      radius: '8px'
    },
    features: ['charts', 'users', 'notifications']
  }
};

let configPath: string;
if (process.env.NODE_ENV === "production") {
  configPath = path.join(process.cwd(), 'public', 'tenant.json');
} else {
  configPath = path.resolve(process.cwd(), 'public/tenant.json');
}

let cachedConfig: Record<string, Tenant> = {};
let lastLoadedTime = 0;

export async function loadTenantMap(): Promise<Record<string, Tenant>> {
  try {
    console.log(">> Runtime check:");
    console.log("  process.cwd():", process.cwd());
    console.log("  NODE_ENV:", process.env.NODE_ENV);
    console.log("  configPath:", configPath);

    try {
      const exists = statSync(configPath);
      console.log("  config file found:", exists.isFile());
      
      const { mtimeMs } = exists;
      
      if (mtimeMs > lastLoadedTime) {
        const raw = await fs.readFile(configPath, 'utf-8');
        const parsed = JSON.parse(raw) satisfies Record<string, Tenant>;
        
        cachedConfig = parsed;
        lastLoadedTime = mtimeMs;
        console.log("tenants-debug", cachedConfig);
      }
      
      return cachedConfig;
    } catch (fileErr) {
      console.error("  🔥 File not found or error:", fileErr);
      console.log("  📋 Using fallback configuration");
      return fallbackConfig;
    }

  } catch (e) {
    console.error('Failed to load tenant config:', e);
    console.log("  📋 Using fallback configuration due to error");
    return fallbackConfig;
  }
}

export async function loadTenantList(): Promise<Tenant[]> {
  const map = await loadTenantMap();
  return Object.values(map).map((tenant: Tenant) => ({ ...tenant, id: getTenantId() }));
}