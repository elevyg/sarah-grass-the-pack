"use client";
import { useRef } from "react";
import Gallery, {
  type GalleryActions,
  type Image,
} from "~/app/_components/gallery";

type Props = { title?: string; galleryImages: Image[] };

const ArtworkGalleryClient = ({ title, galleryImages }: Props) => {
  const galleryAction = useRef<GalleryActions>(null);
  return (
    <div className="flex w-full flex-col">
      <div
        id="artist-work-header"
        className="flex w-full items-center justify-between border-b-2 border-matteBlack p-6 md:items-end"
      >
        <h2 className="heading-1">{title}</h2>
        <div className="flex items-center justify-center">
          <button
            onClick={() => galleryAction.current?.moveLeft()}
            className="flex items-center justify-center md:block"
          >
            <ion-icon
              style={{ fontSize: "2.5rem" }}
              name="chevron-back-outline"
            ></ion-icon>
          </button>
          <button
            onClick={() => galleryAction.current?.moveRight()}
            className="flex items-center justify-center md:block"
          >
            <ion-icon
              style={{ fontSize: "2.5rem" }}
              name="chevron-forward-outline"
            ></ion-icon>
          </button>
        </div>
      </div>
      <Gallery images={galleryImages} ref={galleryAction} />
    </div>
  );
};

export default ArtworkGalleryClient;
