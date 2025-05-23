
import { Tenant } from './tenant';
import { v4 as uuidv4 } from 'uuid';
import { tenantData } from '@/config/tenant';
const tenantMap: Record<string, Tenant> = tenantData;

function getTenantId(): string {
  return uuidv4();
}

export async function loadTenantMap(): Promise<Record<string, Tenant>> {
  return tenantMap;
}

export async function loadTenantList(): Promise<Tenant[]> {
  return Object.values(tenantMap).map((tenant) => ({
    ...tenant,
    id: getTenantId(),
  }));
}