"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatUrl } from "../utils";

type Params = {
  tenant: string;
  locale: string;
};

function LoginForm(params: Params) {
  const { tenant, locale } = params;
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  console.log("params:", tenant, locale);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = Object.fromEntries(
      new FormData(event.currentTarget)
    );

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log("data-debug-jwt", data);
    if (data.success) {
      sessionStorage.setItem("token", data.token);
      router.push(formatUrl(tenant, locale, "/dashboard"));
    } else {
      setError(data.message);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <div>{error}</div>}
      </form>
    </section>
  );
}

export default LoginForm;
