import Image from "next/image";
import { type DetailedHTMLProps, type HTMLAttributes } from "react";
import Markdown from "~/app/_components/markdown";
import Navbar from "~/app/_components/navbar";
import { type SearchParams } from "~/middleware";
import { api } from "~/trpc/server";
import markdownToHtml from "~/utils/markdownToHtml";

type Request = { searchParams: SearchParams };

export default async function About(request: Request) {
  const texts = await api.getAboutTexts();

  const firstBlockHtml = await markdownToHtml(
    texts.attributes.first_block_text,
  );
  const secondBlockHtml = await markdownToHtml(
    texts.attributes.second_block_text,
  );
  const thirdBlockHtml = await markdownToHtml(
    texts.attributes.third_block_text,
  );

  const directionsHtml = await markdownToHtml(texts.attributes.directions_text);

  const mainImageAspectRatio = texts.attributes.main_image?.data.attributes
    .formats.medium
    ? texts.attributes.main_image?.data.attributes.formats.medium.width /
      texts.attributes.main_image?.data.attributes.formats.medium.height
    : 1;

  return (
    <div className="">
      <Navbar mode={request.searchParams.viewport} />
      <div className="navbar-padding grid grid-cols-1 border-b-2 border-matteBlack md:grid-cols-2">
        <div id="first-block" className="border-r-2 border-matteBlack">
          <BlockContainer>
            <h2 className="heading-1-az mb-5">
              {texts.attributes.first_block_title}
            </h2>
            <Markdown content={firstBlockHtml} />
          </BlockContainer>
          <BlockContainer>
            <h2 className="heading-1-az mb-5">
              {texts.attributes.second_block_title}
            </h2>
            <Markdown content={secondBlockHtml} />
          </BlockContainer>
          <BlockContainer className="md:mb-10">
            <h2 className="heading-1-az mb-5">
              {texts.attributes.third_block_title}
            </h2>
            <Markdown content={thirdBlockHtml} />
          </BlockContainer>
        </div>
        <div>
          <BlockContainer>
            <div
              className="relative"
              style={{ aspectRatio: mainImageAspectRatio }}
            >
              {texts.attributes.main_image && (
                <Image
                  src={
                    texts.attributes.main_image?.data.attributes.formats.medium
                      .url
                  }
                  alt="studio image"
                  fill
                  priority
                />
              )}
            </div>
          </BlockContainer>
          <BlockContainer>
            <h2 className="heading-1-az mb-5">
              {texts.attributes.directions_title}
            </h2>
            <Markdown content={directionsHtml} />
          </BlockContainer>
        </div>
      </div>
    </div>
  );
}

const BlockContainer = ({
  className,
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div className={"border-b-2 border-matteBlack p-50px " + className}>
    {children}
  </div>
);
