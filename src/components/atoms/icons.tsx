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
