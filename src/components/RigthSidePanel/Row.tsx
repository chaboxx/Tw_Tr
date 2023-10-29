import { FC } from "react";

import { SecondaryText } from "../";

import { cn } from "@/shared/util/tailwind";

interface Props {
  title: string;
  numberPosts: number;
  category: string;
  className?: string;
}

export const Row: FC<Props> = ({ category, numberPosts, title, className }) => {
  return (
    <div className={cn("hover:bg-[#1d1f23] cursor-pointer", className)}>
      <SecondaryText sizeText="text-sm" tag={category} />
      <p className="text-white font-bold">{title}</p>
      <SecondaryText sizeText="text-sm" tag={`${numberPosts} Posts`} />
    </div>
  );
};
