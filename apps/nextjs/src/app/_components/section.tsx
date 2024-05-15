import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: "mint" | "lavander" | "beige";
  className?: string;
  barClassName?: string;
  lowerBorderOnly?: true;
}

const Section = ({
  children,
  color,
  className,
  barClassName,
  lowerBorderOnly,
}: Props) => {
  return (
    <div
      className={`flex w-full ${lowerBorderOnly ? "border-b-2" : "border-y-2"} border-matteBlack ${className} `}
    >
      <div
        id="left-color-index"
        className={`hidden  w-4 border-r-2 border-matteBlack md:block bg-${color} ${barClassName} pt-[111px]`}
      ></div>
      {children}
    </div>
  );
};

export default Section;
