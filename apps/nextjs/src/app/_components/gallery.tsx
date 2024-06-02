"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  images: {
    url: string;
    height: number;
    width: number;
    caption?: string;
    id: number;
  }[];
};

const Gallery = ({ images }: Props) => {
  return (
    <motion.div className="max-w-screen flex snap-x overflow-x-scroll no-scrollbar">
      {images.map((image) => (
        <div key={image.id} className="flex-shrink-0 p-4">
          <Image
            src={image.url}
            height={image.height}
            width={image.width}
            alt={image.caption ?? "art work image"}
            className="object-fill"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Gallery;
