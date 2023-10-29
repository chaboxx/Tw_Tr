"use client";
import { useState, useRef, type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { BiSearch } from "react-icons/bi";

interface Props {}

type FormValues = {
  search: string;
};

export const SearchBar: FC<Props> = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const [isFocusingInput, setIsFocusingInput] = useState<boolean>(false);
  const formContainer = useRef<HTMLFormElement>(null);

  const handleClickSearchIcon = () => {
    if (!isFocusingInput) {
      const inputElement = formContainer.current?.childNodes[1] as HTMLInputElement;

      inputElement.focus();
    }
  };

  const handleSubmitForm: SubmitHandler<FormValues> = (data) => {
    console.log({ data });
  };

  return (
    <form
      ref={formContainer}
      className="grid grid-cols-[20px_1fr] h-10 bg-[#202327] gap-3 rounded-3xl m-2 focus-within:border-[1px] focus-within:border-primary-900 focus-within:bg-black"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <button
        className="col-[1/2] row-[1/2] z-50 ml-3 my-auto cursor-auto"
        type="submit"
        onClick={handleClickSearchIcon}
      >
        <BiSearch className="text-primary-900" size={20} />
      </button>
      <input
        className="bg-transparent col-[1/3] row-[1/2] h-full outline-none rounded-3xl pl-10 text-white font-normal focus:bg-black"
        type="text"
        onFocus={() => setIsFocusingInput(true)}
        {...register("search", {
          required: true,
          onBlur: () => setIsFocusingInput(false),
        })}
      />
    </form>
  );
};
