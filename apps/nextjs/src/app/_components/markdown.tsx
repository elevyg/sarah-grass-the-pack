"use client";
import React from "react";

type Props = {
  content: string | undefined;
};

const Markdown = (props: Props) => {
  if (!props.content) return null;
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.content }}
      className="flex gap-2"
    />
  );
};

export default Markdown;
