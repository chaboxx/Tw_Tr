import { FC } from "react";
import { type IconType } from "react-icons";

interface Props {
  Icon: React.ReactElement<IconType>;
}
export const Button: FC<Props> = ({ Icon }) => {
  return (
    <div className="bg-[#1d9bf0] w-fit rounded-3xl px-6 py-3 text-center hover:bg-[#1a8cd8] cursor-pointer">
      <p className="text-white font-semibold max-lg:hidden">Twittear</p>
      <div className="hidden text-white max-lg:flex ">{Icon}</div>
    </div>
  );
};
