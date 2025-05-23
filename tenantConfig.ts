
import fs from 'fs/promises';
import path from 'path';
import { statSync } from 'fs';
import { Tenant } from './tenant';
import { v5 as uuidv5,  } from 'uuid';

const T_NAMESPACE = 'tenant-namespace'; 

function getTenantId(name:string):string {
    return uuidv5(name,T_NAMESPACE);
}


const configPath = path.resolve(process.cwd(), 'tenant.json');

let cachedConfig: Record<string, Tenant> = {};
let lastLoadedTime = 0;

export async function loadTenantMap(): Promise<Record<string, Tenant>> {
  try {
    
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
  return Object.values(map).map((tenant:Tenant) => ({...tenant,tenantId:getTenantId( tenant.tenantId)}));
}

