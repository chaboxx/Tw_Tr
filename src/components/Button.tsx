"use client";
import { FC } from "react";
import { type IconType } from "react-icons";

import { cn } from "../util/tailwind";

interface Props {
  label: string;
  Icon: React.ReactElement<IconType>;
  variant?: "primary" | "secondary";
  className?: string;
  style?: React.CSSProperties;
}
export const Button: FC<Props> = ({ Icon, label, variant, className, style }) => {
  return (
    <div
      className={cn(
        `${variant === "primary" || !variant ? "btn-primary" : "btn-secondary"}`,
        className,
      )}
      style={style}
    >
      <p className="font-semibold max-lg:hidden">{label}</p>
      <div className="hidden max-lg:flex ">{Icon}</div>
    </div>
  );
};
