import ArtworkGalleryClient from "~/app/_components/artwork-gallery-client";
import { api } from "~/trpc/server";

type Props = { title?: string };

const ArtworkGallery = async ({ title }: Props) => {
  const artWorks = await api.getArtWorks();

  const galleryImages = artWorks.map((aw) => {
    const { url, height, width } =
      aw.attributes.image.data.attributes.formats.medium;
    return { url, height, width, caption: aw.attributes.caption, id: aw.id };
  });

  return <ArtworkGalleryClient title={title} galleryImages={galleryImages} />;
};

export default ArtworkGallery;
