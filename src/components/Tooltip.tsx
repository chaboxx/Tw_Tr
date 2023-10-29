import { type FC } from "react";

import { useOpen } from "../hooks/useOpen";

interface Props {
  children: (
    isOpen: boolean,
    handleOpen: (payload?: boolean) => void,
  ) => React.ReactNode | React.ReactNode[];
  element: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
}

export const Tooltip: FC<Props> = ({ children, element, style }) => {
  const [isOpen, handleOpen] = useOpen();

  return (
    <div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed top-0 left-0 w-screen h-screen z-20 bg-transparent`}
        onClick={() => handleOpen()}
      />
      <div className="relative z-40">
        {children(isOpen, handleOpen)}
        <div
          className={`absolute ${
            isOpen ? "flex" : "hidden"
          } text-black min-w-[400px] bg-white p-2 rounded top-6 left-0
          `}
          onClick={(event) => event.stopPropagation()}
        >
          <div>{element}</div>
        </div>
      </div>
    </div>
  );
};
