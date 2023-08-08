import { type FC, type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-main-layout max-w-screen-2xl mx-auto">{children}</div>
  );
};
