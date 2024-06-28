/* eslint-disable react/display-name */
"use client";
import Image from "next/image";
import {
  type ForwardedRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
  useRef,
  useEffect,
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

const GAP = 64; // gap-16

export type GalleryActions = { moveRight: () => void; moveLeft: () => void };

const Gallery = forwardRef(
  ({ images }: Props, outerRef: ForwardedRef<GalleryActions>) => {
    const [moveTo, setMoveTo] = useState(0);

    const containerRef = useRef<HTMLDivElement | null>(null);

    const onRightArrowClick = useCallback(
      (id: number) => {
        const updatePosition = Math.min(id, images.length - 1);
        setMoveTo(updatePosition);

        const nextImage = images.at(updatePosition);
        if (!containerRef.current || !nextImage) return;
        window.scrollTo({ behavior: "smooth" });
        containerRef.current.scrollLeft += nextImage.width + GAP / 2;
      },
      [images],
    );

    const onLeftArrowClick = useCallback(
      (id: number) => {
        const updatePosition = Math.max(id, 0);
        setMoveTo(updatePosition);

        const nextImage = images.at(updatePosition);
        window.scrollTo({ behavior: "smooth" });

        if (!containerRef.current || !nextImage) return;

        containerRef.current.scrollLeft += -nextImage.width - GAP / 2;
      },
      [images],
    );

    const keyboardEventHandler = useCallback(
      (e: KeyboardEvent) => {
        e.preventDefault();
        if (e.key === "ArrowLeft") {
          onLeftArrowClick(moveTo + 1);
        }
        if (e.key === "ArrowRight") {
          onRightArrowClick(moveTo - 1);
        }
      },
      [moveTo, onLeftArrowClick, onRightArrowClick],
    );

    useEffect(() => {
      window.addEventListener("keydown", keyboardEventHandler);

      return () => {
        window.removeEventListener("keydown", keyboardEventHandler);
      };
    }, [keyboardEventHandler]);

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
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-50 hidden w-screen items-center justify-between md:flex ">
          <button
            onClick={() => onLeftArrowClick(moveTo - 1)}
            className="cursor-left h-full w-[40%]"
          ></button>
          <button
            onClick={() => onRightArrowClick(moveTo + 1)}
            className="cursor-right h-full w-[40%]"
          ></button>
        </div>

        <div
          className="flex w-full snap-x snap-mandatory overflow-x-hidden scroll-smooth no-scrollbar md:scroll-pl-96"
          ref={containerRef}
        >
          <div className="flex h-full items-center gap-16 px-[300vw] py-5">
            {images.map((image) => (
              <div
                key={image.id}
                className="flex w-screen flex-shrink-0 snap-start snap-always flex-col items-start  p-3 md:w-auto md:p-0"
              >
                <Image
                  src={image.url}
                  height={image.height}
                  width={image.width}
                  alt={image.caption ?? "art work image"}
                  className="h-[60vh] w-max  object-contain"
                  sizes="(max-width: 768px) 100vw"
                />
                <p className="caption flex-1  pt-3">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

export default Gallery;
