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
        containerRef.current.scrollLeft += nextImage.width;
      },
      [images],
    );

    const onLeftArrowClick = useCallback(
      (id: number) => {
        const updatePosition = Math.max(id, 0);
        setMoveTo(updatePosition);

        const nextImage = images.at(updatePosition);
        if (!containerRef.current || !nextImage) return;
        window.scrollTo({ behavior: "smooth" });
        containerRef.current.scrollLeft += -nextImage.width;
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
          onRightArrowClick(moveTo + 1);
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
      <div
        className="flex w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth no-scrollbar md:scroll-pl-96"
        ref={containerRef}
      >
        <div className="flex items-center gap-5 px-[300vw] py-5">
          {images.map((image) => (
            <div
              key={image.id}
              className="w-screen flex-shrink-0 snap-start snap-always p-3 md:w-auto md:p-0"
            >
              <Image
                src={image.url}
                height={image.height}
                width={image.width}
                alt={image.caption ?? "art work image"}
                className="max-h-[75vh] object-contain"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
);

export default Gallery;
