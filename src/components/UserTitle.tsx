"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FC, type MouseEvent } from "react";
import { BsPatchCheckFill } from "react-icons/bs";

import { useOpen } from "../hooks/useOpen";

import { Button } from "./Button";
import { Tooltip } from "./Tooltip";

interface Props {
  title: string;
  href?: string;
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  iconSize?: number;
  iconStyle?: React.CSSProperties;
}

export const UserTitle: FC<Props> = ({
  title,
  href,
  style,
  titleStyle,
  iconStyle,
  iconSize,
}) => {
  const router = useRouter();

  const handleCheckIconClick = (handleOpen: (payload?: boolean) => void) => {
    if (href) {
      router.push(href);

      return;
    }
    handleOpen();
  };

  return (
    <div className="text-white flex flex-row gap-1.5 items-center group" style={style}>
      <Link
        className="font-semibold text-base group-hover:underline"
        href={href ?? "/"}
        style={titleStyle}
      >
        {title}
      </Link>
      <Tooltip
        element={
          <div className="flex flex-col gap-2">
            <p>Cuenta Verificada</p>
            <Button
              Icon={<BsPatchCheckFill />}
              label="Consigue la verficiacion"
              variant="secondary"
            />
            <Button Icon={<BsPatchCheckFill />} label="Consigue la verficiacion" />
          </div>
        }
      >
        {(_, handleOpen) => (
          <div onClick={() => handleCheckIconClick(handleOpen)}>
            <BsPatchCheckFill
              className="text-primary-900 cursor-pointer"
              size={iconSize ?? 23}
              style={iconStyle}
            />
          </div>
        )}
      </Tooltip>
    </div>
  );
};
