import Image from "next/image";
import Section from "~/app/_components/section";
import { api } from "~/trpc/server";
import { stringTimeToDate } from "~/utils/indext";
import markdownToHtml from "~/utils/markdownToHtml";

const Page = async ({ params }: { params: { slug: string } }) => {
  const texts = await api.getOfferingPageTexts();
  const offering = await api.getOffering(params.slug);

  const extendedDescriptionHtml = await markdownToHtml(
    offering.attributes.extended_description,
  );

  const eventInfoHtml = await markdownToHtml(offering.attributes.event_info);

  const imageAspectRatio = !!offering.attributes.rectangle_image
    ? offering.attributes.rectangle_image.data.attributes.formats.medium.width /
      offering.attributes.rectangle_image.data.attributes.formats.medium.height
    : 1;

  return (
    <div className="min-h-screen bg-eggWhite">
      <Section lowerBorderOnly color="mint">
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
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
                    month: "2-digit",
                    day: "2-digit",
                  })
                }-${
                  !!offering.attributes.ending_date &&
                  new Date(
                    offering.attributes.ending_date as unknown as string,
                  ).toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
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
                dangerouslySetInnerHTML={{ __html: extendedDescriptionHtml }}
              />
            </div>
            <div className="flex flex-col border-b-2 border-matteBlack p-10">
              <h2 className="pb-4 text-2xl">
                {texts.attributes.event_info_title}
              </h2>
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: eventInfoHtml }}
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div id="image" className="flex items-start justify-center p-8">
              {offering.attributes.rectangle_image && (
                <div
                  className="relative w-full overflow-hidden rounded-2xl"
                  style={{ aspectRatio: imageAspectRatio }}
                >
                  <Image
                    src={
                      offering.attributes.rectangle_image.data.attributes
                        .formats.medium.url
                    }
                    alt="image"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              )}
            </div>
            <div className="flex items-center justify-center border-y-2 border-matteBlack bg-mint px-8 py-3 text-xl hover:bg-slate-200">
              <p>Apply now</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Page;
