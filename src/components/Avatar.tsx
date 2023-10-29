import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  href: string;
  imageUri: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

export const Avatar: FC<Props> = ({ href, imageUri, height, width, loading }) => {
  return (
    <Link href={href}>
      <Image
        alt="avatar"
        className="rounded-full "
        height={height ?? 40}
        loading={loading ?? "lazy"}
        src={imageUri}
        width={width ?? 40}
      />
    </Link>
  );
};
