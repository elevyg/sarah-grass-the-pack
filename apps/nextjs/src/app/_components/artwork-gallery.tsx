import Gallery from "~/app/_components/gallery";
import { api } from "~/trpc/server";

type Props = { title?: string };

const ArtworkGallery = async ({ title }: Props) => {
  const artWorks = await api.getArtWorks();

  const galleryImages = artWorks.map((aw) => {
    const { url, height, width } =
      aw.attributes.image.data.attributes.formats.medium;
    return { url, height, width, caption: aw.attributes.caption, id: aw.id };
  });

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
      <Gallery images={galleryImages} />
    </div>
  );
};

export default ArtworkGallery;
