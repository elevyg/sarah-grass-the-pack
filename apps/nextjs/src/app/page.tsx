import Image from "next/image";
import GeometricFigures from "~/app/_components/geometric-figures";
import Offerings from "~/app/_components/offerings";
import Section from "~/app/_components/section";
import { api } from "~/trpc/server";

export default async function Home() {
  const texts = await api.getLandingTexts();
  const offerings = await api.getOfferings();

  const journalImageAspectRatio = texts.attributes.journal_section_image
    ? texts.attributes.journal_section_image?.data.attributes.width /
      texts.attributes.journal_section_image?.data.attributes.height
    : 1;

  console.log(
    "IMAGE",
    texts.attributes.journal_section_image?.data.attributes.url,
  );

  return (
    <main className="flex min-h-screen flex-col bg-eggWhite">
      <div className="flex min-h-screen flex-1 items-center justify-center">
        <GeometricFigures />
      </div>
      <Section color="mint">
        <Offerings
          title={texts.attributes.offering_header}
          offerings={offerings}
        />
      </Section>
      <Section color="lavander" lowerBorderOnly>
        <div className="flex w-full flex-1 flex-col">
          <div
            id="journal-header"
            className="w-full border-b-2 border-matteBlack py-2 pl-2"
          >
            <h2 className="text-lg uppercase">
              {texts.attributes.journal_header}
            </h2>
          </div>
          <div className="flex w-full p-8">
            <div
              className="relative flex-1 overflow-hidden rounded-lg "
              style={{ aspectRatio: journalImageAspectRatio }}
            >
              {texts.attributes.journal_section_image && (
                <Image
                  src={
                    texts.attributes.journal_section_image?.data.attributes.url
                  }
                  alt="Journal Section Image"
                  fill
                  style={{
                    objectFit: "contain",
                    scale: 1.05,
                  }}
                />
              )}
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </Section>
      <div
        id="offering-header"
        className="w-full border-b-2 border-matteBlack py-2 pl-2"
      >
        <h2>{texts.attributes.artist_work_header}</h2>
      </div>
    </main>
  );
}
