import { type FC } from "react";

import { cn } from "../util/tailwind";

interface Props {
  label: string;
}

export const SectionLink: FC<Props> = ({ label }) => {
  return (
    <div className="text-center p-2 bg-black hover:cursor-pointer">
      <p className="text-white font-semibold text-lg">{label}</p>
      <div
        className={cn(`bg-primary-900 mx-auto h-1.5 rounded mt-2`)}
        style={{ width: `${label.length}ch` }}
      />
    </div>
  );
};
