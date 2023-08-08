"use client";
import { FC } from "react";
import Image from "next/image";

import { cn } from "../util/tailwind";

interface Props {
  type: "img" | "video";
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export const PostMedia: FC<Props> = ({ src, type, alt, className, imageClassName }) => {
  return (
    <div className={cn("relative bg-black w-full h-auto", className)}>
      {type === "img" ? (
        <Image
          alt={alt}
          className={cn("rounded-xl", imageClassName)}
          height={600}
          src={src}
          width={600}
        />
      ) : (
        <video controls width="100%">
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};
