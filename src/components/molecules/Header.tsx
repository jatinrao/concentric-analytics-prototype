"use client";
import { useEffect, useState } from "react";
import { User } from "@/data/users";
import { useRouter } from "next/navigation";
import { Locales } from "intlayer";

export default function Header({
  tenant,
}: {
  tenant: string;
  locale: Locales;
}) {
  const [user, setUser] = useState<User>();
  const router = useRouter();
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      try {
        async function fetchUser() {
          const res = await fetch("/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ tenant }),
          });
          const data = await res.json();
          console.log("debug", data);
          if (data.code == 200) setUser(data.user);
          else if (data.code == 401) {
            sessionStorage.removeItem("token");
            //TO_DO clean up this code
            router.push("/orgA/hi/login");
          }
        }
        fetchUser();
      } catch (error) {
        console.log("Invalid token", error);
      }
    } else {
      //TO_DO clean up this code
      router.push("/orgA/hi/login");
    }
  }, [router, tenant]);

  if (!user) {
    return <div className="w-full m-auto">Loading ....</div>;
  }

  return (
    <header className="bg-primary p-4">
      <div className="flex w-full justify-between">
        <div className="my-auto">Concentric Analytics</div>
        <div>
          <p>Welcome, {user.name}!</p>
          <button
            className="bg-secondary p-2 w-full"
            onClick={() => {
              sessionStorage.removeItem("token");
              //TO_DO clean up this code
              router.push("/orgA/hi/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
