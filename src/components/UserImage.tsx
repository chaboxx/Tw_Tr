import { FC } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export const UserImage: FC<Props> = ({ src, alt }) => {
  return (
    <div className="relative w-12 h-12">
      <Image fill alt={alt} className="rounded-full aspect-square" src={src} />
    </div>
  );
};
