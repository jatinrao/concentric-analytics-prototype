import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ tenant: string; locale: string }>;
};

export default async function LocalePage({ params }: Props) {
  const { tenant, locale } = await params;
  console.log("localePage", locale);
  redirect(`/${tenant}/${locale}/login`);
}
