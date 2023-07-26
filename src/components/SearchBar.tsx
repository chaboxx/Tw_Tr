"use client";
import { useState, type FC } from "react";
import { BiSearch } from "react-icons/bi";
import classNames from "classnames";

interface Props {}

export const SearchBar: FC<Props> = () => {
  const [isFocusingInput, setIsFocusingInput] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-[20px_1fr] h-10 bg-[#202327] gap-3 rounded-3xl m-2 focus-within:border-[1px] focus-within:border-primary-900 focus-within:bg-black">
      <div
        className={classNames(
          `${isFocusingInput ? "z-10" : "z-0"}`,
          "col-[1/2] row-[1/2] ml-2 my-auto",
        )}
      >
        <BiSearch className="text-primary-900" size={20} />
      </div>
      <input
        className="bg-transparent col-[1/3] row-[1/2] h-full outline-none rounded-3xl pl-8 text-white font-normal focus:bg-black"
        type="text"
        onBlur={() => setIsFocusingInput(false)}
        onFocus={() => setIsFocusingInput(true)}
      />
    </div>
  );
};
