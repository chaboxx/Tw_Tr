import { FC, type PropsWithChildren } from "react";

import { cn } from "@/shared/util/tailwind";

interface Props extends PropsWithChildren {
  className?: string;
}

export const Panel: FC<Props> = ({ children, className }) => {
  return <div className={cn("bg-[#16181c] rounded-xl", className)}>{children}</div>;
};
