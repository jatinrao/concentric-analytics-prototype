"use client";

import type { FC } from "react";
import { useIntlayer } from "next-intlayer";

export const ClientComponentTemplate: FC = () => {
  const content = useIntlayer("atoms-template");

  return (
    <div>
      <h2>{content.title} </h2>
      {/* <p>{content.content}</p> */}
    </div>
  );
};
