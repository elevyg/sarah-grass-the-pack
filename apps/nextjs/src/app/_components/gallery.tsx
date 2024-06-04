/* eslint-disable react/display-name */
"use client";
import Image from "next/image";
import {
  type ForwardedRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";

export type Image = {
  url: string;
  height: number;
  width: number;
  caption?: string;
  id: number;
};

type Props = {
  images: Image[];
};

export type GalleryActions = { moveRight: () => void; moveLeft: () => void };

const Gallery = forwardRef(
  ({ images }: Props, outerRef: ForwardedRef<GalleryActions>) => {
    const [moveTo, setMoveTo] = useState(0);

    const onRightArrowClick = useCallback(
      (id: number) => {
        const updatePosition = Math.min(id, images.length - 1);
        setMoveTo(updatePosition);
        window.scrollTo({ behavior: "smooth" });
        document.getElementById(`gallery-image-${id}`)?.scrollIntoView({
          block: "center",
          inline: "end",
          behavior: "smooth",
        });
      },
      [images.length],
    );

    const onLeftArrowClick = useCallback((id: number) => {
      const updatePosition = Math.max(id, 0);
      setMoveTo(updatePosition);
      window.scrollTo({ behavior: "smooth" });
      document.getElementById(`gallery-image-${id}`)?.scrollIntoView({
        block: "center",
        inline: "end",
        behavior: "smooth",
      });
    }, []);

    useImperativeHandle(
      outerRef,
      () => {
        return {
          moveRight() {
            onRightArrowClick(moveTo + 1);
          },
          moveLeft() {
            onLeftArrowClick(moveTo - 1);
          },
        };
      },
      [moveTo, onLeftArrowClick, onRightArrowClick],
    );

    return (
      <div className="flex w-full snap-x snap-mandatory scroll-pl-96 overflow-x-hidden scroll-smooth no-scrollbar">
        <div className="flex gap-5 px-[300vw] py-5">
          {images.map((image, index) => (
            <div
              key={image.id}
              id={`gallery-image-${index.toString()}`}
              className="flex-shrink-0 snap-start snap-always bg-red-300"
            >
              <Image
                src={image.url}
                height={image.height}
                width={image.width}
                alt={image.caption ?? "art work image"}
                className="object-fill"
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
);

export default Gallery;
