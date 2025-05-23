import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white rounded-elem p-8 w-full h-fit h-min-[160px] border-secondary border-3 mx-auto my-4">
      {children}
    </div>
  );
};
