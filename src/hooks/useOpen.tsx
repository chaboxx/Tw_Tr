import { useState } from "react";

export const useOpen: () => [boolean, (payload?: boolean) => void] = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (payload: boolean | undefined) =>
    payload ? setIsOpen(payload) : setIsOpen(!isOpen);

  return [isOpen, handleOpen];
};
