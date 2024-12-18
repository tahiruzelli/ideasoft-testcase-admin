import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
  props?: any;
}

export function CopyIcon({
  height,
  width,
  color,
  props,
}: IconProps): JSX.Element {
  return (
    <Svg
      width={width ?? 13}
      height={height ?? 15}
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.75 12c-.412 0-.766-.147-1.06-.44a1.445 1.445 0 01-.44-1.06v-9c0-.413.147-.766.44-1.06C3.985.148 4.339 0 4.75 0h6.75c.412 0 .766.147 1.06.44.293.294.44.647.44 1.06v9c0 .412-.147.766-.44 1.06-.294.293-.648.44-1.06.44H4.75zm0-1.5h6.75v-9H4.75v9zm-3 4.5c-.413 0-.766-.147-1.06-.44a1.445 1.445 0 01-.44-1.06V3h1.5v10.5H10V15H1.75z"
        fill={color ?? "#09112F"}
      />
    </Svg>
  );
}

export function LikeIcon({
  height,
  width,
  color,
  props,
}: IconProps): JSX.Element {
  return (
    <Svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M12 5.501l2 2"
        stroke={color ?? "#1C274C"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M8.962 18.911l.464-.589-.464.59zM12 5.501l-.54.52a.75.75 0 001.08 0l-.54-.52zm3.038 13.41l.465.59-.465-.59zm-5.612-.589c-1.516-1.195-3.173-2.361-4.488-3.842C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339 1.43 1.61 3.254 2.9 4.68 4.024l.93-1.178zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713 1.612-.736 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.026 5 3.06 2.786 4.072 1.25 6.424 1.25 9.136h1.5zM8.497 19.5c.513.404 1.063.834 1.62 1.16.557.326 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385-.453-.264-.922-.628-1.448-1.043L8.497 19.5zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024 1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343-1.315 1.48-2.972 2.647-4.488 3.842l.929 1.178zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077-2.264-1.034-5.098-.616-7.54 1.92l1.08 1.041c2.058-2.138 4.224-2.333 5.836-1.597 1.659.759 2.874 2.562 2.874 4.713h1.5zm-8.176 9.185c-.526.415-.995.779-1.448 1.043-.452.265-.816.385-1.126.385v1.5c.69 0 1.326-.264 1.883-.59.558-.326 1.107-.756 1.62-1.16l-.929-1.178z"
        fill={color ?? "#1C274C"}
      />
    </Svg>
  );
}

export function SearchIcon({
  height,
  width,
  color,
  props,
}: IconProps): JSX.Element {
  return (
    <Svg
      width={width ?? 22}
      height={height ?? 22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.462 17.923a8.461 8.461 0 100-16.922 8.461 8.461 0 000 16.922zM20.999 21l-5.385-5.385"
        stroke={color ?? "#3E3E3E"}
        strokeWidth={1.71429}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ArrowDownIcon({
  height,
  width,
  color,
  props,
}: IconProps): JSX.Element {
  return (
    <Svg
      width={width ?? 14}
      height={height ?? 8}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.274 1.504l5.61 5.283a.975.975 0 001.322 0l5.61-5.283a.844.844 0 000-1.246.976.976 0 00-1.322 0L6.546 4.92 1.596.258a.975.975 0 00-1.322 0 .845.845 0 000 1.246z"
        fill={color ?? "#092256"}
      />
    </Svg>
  );
}
