import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ tenant: string }>;
};

export default async function TenantPage({ params }: Props) {
  const { tenant } = await params;
  redirect(`/${tenant}/en-US`);
}
