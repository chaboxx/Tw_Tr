"use client";
import { FC } from "react";
import Image from "next/image";

interface Props {
  type: "img" | "video";
  src: string;
  alt: string;
}

export const PostMedia: FC<Props> = ({ src, type, alt }) => {
  return (
    <div className="relative bg-black w-full h-auto">
      {type === "img" ? (
        <Image alt={alt} className="rounded-xl" height={600} src={src} width={600} />
      ) : (
        <video controls width="100%">
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};
