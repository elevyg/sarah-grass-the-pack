"use client";
import React from "react";

type Props = {
  content: string | undefined;
  className?: string;
};

const Markdown = (props: Props) => {
  if (!props.content) return null;
  return (
    <div className={props.className}>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
};

export default Markdown;
