import { type DetailedHTMLProps, type HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const HeadingContainer = ({ children, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={
        "p-30px w-full border-b-2 border-matteBlack text-center md:text-start " +
        className
      }
    >
      {children}
    </div>
  );
};

export default HeadingContainer;
