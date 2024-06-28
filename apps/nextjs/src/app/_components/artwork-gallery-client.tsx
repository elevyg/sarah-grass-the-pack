"use client";
import { useRef } from "react";
import Gallery, {
  type GalleryActions,
  type Image,
} from "~/app/_components/gallery";

import ChevronLeft from "~/../public/svg/chevron-left.svg";
import ChevronRight from "~/../public/svg/chevron-right.svg";

type Props = { title?: string; galleryImages: Image[] };

const ArtworkGalleryClient = ({ title, galleryImages }: Props) => {
  const galleryAction = useRef<GalleryActions>(null);
  return (
    <div className="flex w-full flex-col">
      <div
        id="artist-work-header"
        className="flex w-full items-center justify-between border-b-2 border-matteBlack p-30px md:items-end"
      >
        <h2 className="heading-1">{title}</h2>
        <div className="flex items-center justify-center gap-10">
          <button
            onClick={() => galleryAction.current?.moveLeft()}
            className="flex items-center justify-center md:block"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => galleryAction.current?.moveRight()}
            className="flex items-center justify-center md:block"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <Gallery images={galleryImages} ref={galleryAction} />
    </div>
  );
};

export default ArtworkGalleryClient;
