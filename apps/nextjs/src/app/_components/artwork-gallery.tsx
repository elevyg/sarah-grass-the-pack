import Image from "next/image";
import React from "react";
import { api } from "~/trpc/server";

type Props = { title?: string };

const ArtworkGallery = async ({ title }: Props) => {
  const artWorks = await api.getArtWorks();

  return (
    <div className="flex w-full flex-col">
      <div
        id="artist-work-header"
        className="flex w-full items-end justify-between border-b-2 border-matteBlack py-2 pl-2"
      >
        <h2 className="heading-1">{title}</h2>
        <div className="flex items-center justify-center">
          <button>
            <ion-icon
              style={{ fontSize: "2.5rem" }}
              name="chevron-back-outline"
            ></ion-icon>
          </button>
          <button>
            <ion-icon
              style={{ fontSize: "2.5rem" }}
              name="chevron-forward-outline"
            ></ion-icon>
          </button>
        </div>
      </div>
      <div className="max-w-screen no-scrollbar flex snap-x overflow-x-scroll">
        {artWorks.map((aw) => (
          <div key={aw.id} className="p-4">
            <Image
              src={aw.attributes.image.data.attributes.formats.medium.url}
              height={aw.attributes.image.data.attributes.height}
              width={aw.attributes.image.data.attributes.width}
              alt={aw.attributes.caption ?? "art work image"}
              className="object-fill"
            />
          </div>
        ))}
        {artWorks.map((aw) => (
          <div key={aw.id} className="flex-shrink-0 p-4">
            <Image
              src={aw.attributes.image.data.attributes.formats.medium.url}
              height={aw.attributes.image.data.attributes.formats.medium.height}
              width={aw.attributes.image.data.attributes.formats.medium.width}
              alt={aw.attributes.caption ?? "art work image"}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtworkGallery;
