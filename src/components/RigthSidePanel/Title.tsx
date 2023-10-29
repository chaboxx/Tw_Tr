import { FC, type PropsWithChildren } from "react";

import { cn } from "@/shared/util/tailwind";

interface Props extends PropsWithChildren {
  style?: React.CSSProperties;
  className?: string;
}
export const Title: FC<Props> = ({ children, className, style }) => {
  return (
    <h5 className={cn(`text-white font-bold text-xl`, className)} style={style}>
      {children}
    </h5>
  );
};
