import { FC } from "react";

interface Props {
  tag: string;
  sizeText?: "text-sm" | "text-md" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl";
}

export const UserTag: FC<Props> = ({ tag, sizeText }) => {
  return (
    <div>
      <p className={`text-gray-default ${sizeText ?? "text-md"}`}>{tag}</p>
    </div>
  );
};
