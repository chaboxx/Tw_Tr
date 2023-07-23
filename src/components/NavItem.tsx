"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type FC } from "react";
import { type IconType } from "react-icons";

interface Props {
  href: string;
  Icon: React.ReactElement<IconType>;
  label: string;
  areThereNewRequests?: boolean;
}

export const NavItem: FC<Props> = ({ href, Icon, areThereNewRequests, label }) => {
  const pathName = usePathname();

  return (
    <Link
      className="flex w-fit pr-6 pl-3 py-2 
        rounded-3xl border-r-2 flex-row gap-3 items-center  text-white bg-black hover:bg-dark-700 cursor-pointer
        max-lg:p-3 max-lg:rounded-full
      "
      href={href}
    >
      <div className="relative">
        {areThereNewRequests && (
          <div className="absolute bg-[#1d9bf0] rounded-full w-1.5 -top-0.5 right-0 h-1.5" />
        )}
        {Icon}
      </div>
      <p
        className={`text-xl ${
          pathName === href ? "font-semibold" : "font-normal"
        } max-lg:hidden`}
      >
        {label}
      </p>
    </Link>
  );
};
