"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { User } from "@/data/users";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState<User>(null);
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
  }, []);

  if (!user) {
    return (
      <div>
        <Link href="/login">Login</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button
        onClick={() => {
          sessionStorage.removeItem("token");
          //TO_DO clean up this code
          router.push("/orgA/hi/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
