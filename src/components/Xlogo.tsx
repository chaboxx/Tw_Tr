import { type FC } from "react";

import { cn } from "../util/tailwind";

interface Props {
  className?: string;
}

export const Xlogo: FC<Props> = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      version="1.1"
      viewBox="0 0 1668.56 1221.19"
      x="0px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      y="0px"
    >
      <g id="layer1" transform="translate(52.390088,-25.058597)">
        <path
          className="fill-white"
          d="M485.39,356.79l230.07,307.62L483.94,914.52h52.11l202.7-218.98l163.77,218.98h177.32 L836.82,589.6l215.5-232.81h-52.11L813.54,558.46L662.71,356.79H485.39z M562.02,395.17h81.46l359.72,480.97h-81.46L562.02,395.17z"
        />
      </g>
    </svg>
  );
};
