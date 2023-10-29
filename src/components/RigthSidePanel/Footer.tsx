import { FC } from "react";

import { cn } from "@/shared/util/tailwind";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return (
    <div className={cn("hover:bg-[#1d1f23] w-full cursor-pointer", className)}>
      <span className="text-primary-900 font-normal">Mostrar más</span>
    </div>
  );
};
