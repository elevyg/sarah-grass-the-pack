import Image from "next/image";
import Footer from "~/app/_components/footer";
import Offerings from "~/app/_components/offerings";
import Section from "~/app/_components/section";
import { api } from "~/trpc/server";
import markdownToHtml from "~/utils/markdownToHtml";
import { type SearchParams } from "../middleware";
import Hero from "~/app/_components/hero";
import { Suspense } from "react";
import ArtworkGallery from "~/app/_components/artwork-gallery";

type Request = { searchParams: SearchParams };

export default async function Home(request: Request) {
  const texts = await api.getLandingTexts();

  const journalImageAspectRatio = texts.attributes.journal_section_image
    ? texts.attributes.journal_section_image?.data.attributes.width /
      texts.attributes.journal_section_image?.data.attributes.height
    : 1;

  const journalDescriptionHtml = await markdownToHtml(
    texts.attributes.journal_section_description,
  );

  return (
    <main className="flex min-h-screen flex-col bg-eggWhite text-matteBlack">
      <Hero viewport={request.searchParams.viewport} />
      <Section color="mint">
        <Suspense fallback={null}>
          <Offerings title={texts.attributes.offering_header} />
        </Suspense>
      </Section>
      <Section color="lavander" lowerBorderOnly>
        <div className="flex w-full flex-1 flex-col">
          <div
            id="journal-header"
            className="w-full border-b-2 border-matteBlack bg-lavander py-2 pl-2 md:bg-eggWhite"
          >
            <h2 className="heading-1">{texts.attributes.journal_header}</h2>
          </div>
          <div className="flex w-full flex-col p-8 md:flex-row">
            <div className="flex flex-1 items-center justify-center">
              <div
                className="relative mb-5 w-full overflow-hidden rounded-lg md:mb-0"
                style={{ aspectRatio: journalImageAspectRatio }}
              >
                {texts.attributes.journal_section_image && (
                  <Image
                    src={
                      texts.attributes.journal_section_image?.data.attributes
                        .url
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
            </div>
            <div className="flex-1 md:pl-10 ">
              <div className="flex w-full flex-col">
                <h3 className="heading-2 mb-5">
                  {texts.attributes.journal_section_title}
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: journalDescriptionHtml }}
                  className="mb-5"
                />
                <a
                  href="https://thepackartschool.substack.com/about"
                  target="_blank"
                  className="heading-3 w-full border-y-2 border-lavander px-4 py-2 text-lavander"
                >
                  {texts.attributes.suscribe_button_label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Suspense>
        <ArtworkGallery title={texts.attributes.artist_work_header} />
      </Suspense>
      <Section color="beige">
        <div className="w-full">
          <div
            id="connect-header"
            className="w-full border-b-2 border-matteBlack bg-beige py-2 pl-2 md:bg-eggWhite"
          >
            <h2 className="heading-1">{texts.attributes.connect_header}</h2>
          </div>

          <Footer />
        </div>
      </Section>
    </main>
  );
}
