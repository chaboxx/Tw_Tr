import { FC } from "react";
import { type IconType } from "react-icons";

interface Props {
  icon: React.ReactElement<IconType>;
  color: "green" | "red" | "primary";
  label?: number;
  style?: React.CSSProperties;
}

export const Icon: FC<Props> = ({ icon, color, label, style }) => {
  const iconColors = {
    green: {
      icon: "hover:text-[#00ba7c]",
      background: "group-hover:bg-[#071a14]",
    },
    red: { icon: "hover:text-[#f91880]", background: "group-hover:bg-[#200914]" },
    primary: { icon: "hover:text-primary-900", background: "group-hover:bg-[#0a171f]" },
  };

  return (
    <div
      className={`flex flex-row gap-1 items-center text-gray-default cursor-pointer group ${iconColors[color].icon}`}
      style={style}
    >
      <div
        className={`${iconColors[color].background}
        rounded-[50%] p-2`}
      >
        {icon}
      </div>
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
};
