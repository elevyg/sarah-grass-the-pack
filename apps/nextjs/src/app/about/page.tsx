import Image from "next/image";
import Markdown from "~/app/_components/markdown";
import { api } from "~/trpc/server";
import markdownToHtml from "~/utils/markdownToHtml";

export default async function About() {
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
    <div className="grid grid-cols-1 border-b-2 border-matteBlack md:grid-cols-2">
      <div className="border-r-2 border-matteBlack">
        <div className="border-b-2 border-matteBlack p-10">
          <h2 className="heading-2-az mb-5">
            {texts.attributes.first_block_title}
          </h2>
          <Markdown content={firstBlockHtml} />
        </div>
        <div className="border-b-2 border-matteBlack p-10">
          <h2 className="heading-2-az mb-5">
            {texts.attributes.second_block_title}
          </h2>
          <Markdown content={secondBlockHtml} />
        </div>
        <div className="border-b-2 border-matteBlack p-10 md:mb-10">
          <h2 className="heading-2-az mb-5">
            {texts.attributes.third_block_title}
          </h2>
          <Markdown content={thirdBlockHtml} />
        </div>
      </div>
      <div>
        <div className="border-b-2 border-matteBlack p-10 ">
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
        </div>
        <div className="border-b-2 border-matteBlack p-10 ">
          <h2 className="heading-2-az mb-5">
            {texts.attributes.directions_title}
          </h2>
          <Markdown content={directionsHtml} />
        </div>
      </div>
    </div>
  );
}
