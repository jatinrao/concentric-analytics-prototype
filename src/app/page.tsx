import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirect to default tenant and locale
  redirect("/orgA/en-US");
}
