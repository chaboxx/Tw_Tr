import { type FC } from "react";
import classnames from "classnames";

interface Props {
  label: string;
}

export const SectionLink: FC<Props> = ({ label }) => {
  return (
    <div className="text-center p-2 bg-black hover:cursor-pointer">
      <p className="text-white font-semibold text-lg">{label}</p>
      <div
        className={classnames(
          `w-[${label.length}ch]`,
          "bg-primary-900 mx-auto h-1.5 rounded mt-2",
        )}
      />
    </div>
  );
};
