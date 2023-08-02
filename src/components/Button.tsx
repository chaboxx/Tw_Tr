import { FC } from "react";
import { type IconType } from "react-icons";

interface Props {
  label: string;
  Icon: React.ReactElement<IconType>;
  variant?: "primary" | "secondary";
  style?: React.CSSProperties;
}
export const Button: FC<Props> = ({ Icon, label, variant, style }) => {
  return (
    <div
      className={`${variant === "primary" || !variant ? "btn-primary" : "btn-secondary"}`}
      style={style}
    >
      <p className="font-semibold max-lg:hidden">{label}</p>
      <div className="hidden max-lg:flex ">{Icon}</div>
    </div>
  );
};
