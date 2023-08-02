import { type FC, type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
}

export const Tooltip: FC<Props> = ({ children, isOpen, onClose, style }) => {
  return (
    <div>
      <div
        className={`absolute ${isOpen ? "flex" : "hidden"} text-white  min-w-[400px]`}
        style={style}
      >
        {isOpen && children}
      </div>
    </div>
  );
};
