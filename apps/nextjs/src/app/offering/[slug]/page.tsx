import Image from "next/image";
import React from "react";
import Section from "~/app/_components/section";
import { api } from "~/trpc/server";
import { stringTimeToDate } from "~/utils/indext";
import { remark } from "remark";
import html from "remark-html";

const Page = async ({ params }: { params: { slug: string } }) => {
  const texts = await api.getOfferingPageTexts();
  const offering = await api.getOffering(params.slug);

  const processedContent = await remark()
    .use(html)
    .process(offering.attributes.extended_description);
  const contentHtml = processedContent.toString();

  console.log(contentHtml);

  return (
    <main className="min-h-screen bg-eggWhite">
      <Section lowerBorderOnly color="mint">
        <div className="grid w-full grid-cols-2">
          <div className="flex flex-1 flex-col  border-r-2 border-matteBlack">
            <div className="flex flex-col border-b-2 border-matteBlack p-10">
              <h1 className="pb-3 text-5xl">{offering.attributes.title}</h1>
              {offering.attributes.instructors?.data.map((i) => (
                <p className="mb-4 text-2xl" key={i.id}>
                  {i.attributes.full_name}
                </p>
              ))}
              <div className="mb-4 self-start text-2xl">
                <p>
                  {`${offering.attributes.days}, 
                ${
                  !!offering.attributes.starting_date &&
                  new Date(
                    offering.attributes.starting_date as unknown as string,
                  ).toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                  })
                }-${
                  !!offering.attributes.ending_date &&
                  new Date(
                    offering.attributes.ending_date as unknown as string,
                  ).toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                  })
                }, 
                ${
                  !!offering.attributes.starting_time &&
                  stringTimeToDate(
                    offering.attributes.starting_time as unknown as string,
                  ).toLocaleString("en-US", { hour: "numeric", hour12: true })
                }-${
                  !!offering.attributes.ending_time &&
                  stringTimeToDate(
                    offering.attributes.ending_time as unknown as string,
                  ).toLocaleString("en-US", { hour: "numeric", hour12: true })
                }`}
                </p>
              </div>
            </div>
            <div className="flex flex-col border-b-2 border-matteBlack p-10">
              <h2 className="pb-4 text-2xl">
                {texts.attributes.about_offering_title}
              </h2>
              <div
                className="flex flex-col gap-2"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 items-center justify-center p-5">
              {offering.attributes.rectangle_image && (
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <Image
                    src={
                      offering.attributes.rectangle_image.data.attributes
                        .formats.medium.url
                    }
                    alt="image"
                    width={
                      offering.attributes.rectangle_image.data.attributes
                        .formats.medium.width
                    }
                    height={
                      offering.attributes.rectangle_image.data.attributes
                        .formats.medium.height
                    }
                    priority
                    sizes=""
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Page;
