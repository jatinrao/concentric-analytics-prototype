"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatUrl } from "../utils";
import { useIntlayer } from "next-intlayer";

type Params = {
  tenant: string;
  locale: string;
};

function LoginForm(params: Params) {
  const { tenant, locale } = params;
  const content = useIntlayer("root");
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
      <h3 className="text-black m-auto">{content.getStarted.main}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            className="grid mt-4 w-full rounded-elem cursor-default grid-cols-1  bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
            name="username"
            placeholder="User name"
            required
          />
        </label>
        <br />
        <label>
          <input
            className="grid w-full rounded-elem cursor-default grid-cols-1  bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </label>
        <br />
        <button
          className="bg-primary w-full py-1.5 pr-2 pl-3 rounded-elem"
          type="submit"
        >
          Login
        </button>
        {error && <div>{error}</div>}
      </form>
    </section>
  );
}

export default LoginForm;
