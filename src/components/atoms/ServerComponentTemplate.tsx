import type { FC } from "react";
import { useIntlayer } from "next-intlayer/server";

export const ServerComponentTemplate: FC = () => {
  const root = useIntlayer("atoms-template");
  //   console.log("scT", root);
  return (
    <div>
      <h2>{root.title} </h2>
      {/* <p>{content.content}</p> */}
    </div>
  );
};
