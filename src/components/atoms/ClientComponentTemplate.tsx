"use client";

import { useEffect, type FC } from "react";
import { useIntlayer } from "next-intlayer";

export const ClientComponentTemplate: FC = () => {
  const content = useIntlayer("atoms-template");
  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = sessionStorage.getItem("token");

      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log(data);
    };
    fetchUserDetails();
  }, []);

  return (
    <div>
      <h2>{content.title} </h2>
      {/* <p>{content.content}</p> */}
    </div>
  );
};
