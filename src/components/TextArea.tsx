"use client";
import { FC, useState, type FormEvent, type KeyboardEvent } from "react";
import { BiWorld } from "react-icons/bi";

export const TextArea: FC = () => {
  const [text, setText] = useState<string>("");
  const [isOpenprivacyOptions, setIsOpenprivacyOptions] = useState<boolean>(false);

  const handleEditTextArea = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    const target = event.target as HTMLDivElement;

    setText(target.textContent ?? "");
  };

  const handleShowPrivacyOptions = () => setIsOpenprivacyOptions(true);
  const handleHidePrivacyOptions = (e: KeyboardEvent<HTMLDivElement>) =>
    e.code === "Escape" && setIsOpenprivacyOptions(false);

  return (
    <div className="bg-black text-white p-2" onClick={handleShowPrivacyOptions}>
      <div
        contentEditable
        className={`relative min-h-[2ch] focus:outline-none border-none after:content-['!Que_esta_pasando?!'] after:w-full after:absolute after:top-0 after:left-0 after:text-lg after:text-white ${
          text ? "after:hidden" : "after:block"
        } after:pointer-events-none after:text-gray-500`}
        onInput={handleEditTextArea}
        onKeyUp={handleHidePrivacyOptions}
      />
      <div
        className={`${
          isOpenprivacyOptions ? "flex" : "hidden"
        } flex-row items-center gap-1.5 mt-3 pb-2.5 text-primary-900 border-gray-600 border-b-[1px]`}
      >
        <div>
          <BiWorld size={14} />
        </div>
        <p className="font-semibold text-xs">Cualquier persona puede responder</p>
      </div>
    </div>
  );
};
