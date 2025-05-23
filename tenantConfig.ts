
import fs from 'fs/promises';
import path from 'path';
import { statSync } from 'fs';
import { Tenant } from './tenant';
import { v4 as uuidv4,  } from 'uuid';
import Error from 'next/error';


function getTenantId():string {
    return uuidv4();
}
let configPath:string;
if(process.env.NODE_ENV == "production"){
    configPath = path.join(process.cwd(), 'public', 'tenant.json');
}
else{
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
} catch (err) {
  console.error("  🔥 File not found or error:", err);
}
    const { mtimeMs } = statSync(configPath);

    if (mtimeMs > lastLoadedTime) {

      const raw = await fs.readFile(configPath, 'utf-8');
      const parsed = JSON.parse(raw) satisfies Record<string, Tenant>;

      cachedConfig = parsed;
      lastLoadedTime = mtimeMs;
    }

    return cachedConfig;
  } catch (e) {
    console.error('Failed to load tenant config:', e);
    return {};
  }
}

export async function loadTenantList(): Promise<Tenant[]> {
  const map = await loadTenantMap();
  return Object.values(map).map((tenant:Tenant) => ({...tenant,id:getTenantId()}));
}

