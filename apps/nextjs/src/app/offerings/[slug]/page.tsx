import Image from "next/image";
import Navbar from "~/app/_components/navbar";
import Section from "~/app/_components/section";
import { api } from "~/trpc/server";
import { stringTimeToDate } from "~/utils/indext";
import markdownToHtml from "~/utils/markdownToHtml";
import { type SearchParams } from "../../../middleware";
import Markdown from "~/app/_components/markdown";
import OtherOfferings from "~/app/offerings/[slug]/_other-offerings";

type Request = { searchParams: SearchParams; params: { slug: string } };

const Page = async ({ params, searchParams }: Request) => {
  const texts = await api.getOfferingPageTexts();
  const offering = await api.getOffering(params.slug);
  const otherOfferings = await api.getOtherOfferings(params.slug);

  const extendedDescriptionHtml = await markdownToHtml(
    offering.attributes.extended_description,
  );

  const eventInfoHtml = await markdownToHtml(offering.attributes.event_info);

  const subtitle = await markdownToHtml(offering.attributes.subtitle, {
    p: "font-arizona",
  });

  const imageAspectRatio = !!offering.attributes.rectangle_image
    ? offering.attributes.rectangle_image.data.attributes.formats.medium.width /
      offering.attributes.rectangle_image.data.attributes.formats.medium.height
    : 1;

  const startingDate = offering.attributes.starting_date
    ? new Date(offering.attributes.starting_date).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
      })
    : null;

  const endingDate = offering.attributes.ending_date
    ? new Date(offering.attributes.ending_date).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
      })
    : null;

  const startingTime = offering.attributes.starting_time
    ? stringTimeToDate(
        offering.attributes.starting_time as unknown as string,
      ).toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
      })
    : null;

  const endingTime =
    offering.attributes.ending_time &&
    stringTimeToDate(
      offering.attributes.ending_time as unknown as string,
    ).toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
    });

  const readableOfferingDate = () => {
    if (
      offering.attributes.days &&
      startingDate &&
      endingDate &&
      startingTime &&
      endingTime
    ) {
      return `${offering.attributes.days}, ${startingDate}-${endingDate}, ${startingTime}-${endingTime}`;
    }
    return;
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const offeringTypeInfo = offering.attributes.offeringTypeInfo.at(
    0,
  ) as unknown;

  return (
    <div>
      <Navbar mode={searchParams.viewport} />
      <div className="min-h-screen bg-eggWhite pt-[4rem] md:pt-[6rem]">
        <Section lowerBorderOnly color="mint">
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            <div className="flex flex-1 flex-col  border-matteBlack md:border-r-2">
              <div className="flex flex-col border-matteBlack px-8 pb-4 pt-8 md:border-b-2 md:p-10">
                <h1 className="pb-3 text-5xl">{offering.attributes.title}</h1>
                {offering.attributes.instructors?.data.map((i) => (
                  <p className="mb-4 text-2xl" key={i.id}>
                    {i.attributes.full_name}
                  </p>
                ))}
                {offering.attributes.offering_type?.data.attributes.Name ===
                  "One-on-one" && (
                  <div className="mb-4 self-start text-2xl">
                    <Markdown content={subtitle} />
                  </div>
                )}

                <div className="mb-4 self-start text-2xl">
                  {readableOfferingDate() && <p>{readableOfferingDate()}</p>}
                </div>
              </div>
              <div
                id="about_offering_desktop"
                className="hidden flex-col border-b-2 border-matteBlack p-10 md:flex"
              >
                <h2 className="pb-4 text-2xl">
                  {texts.attributes.about_offering_title}
                </h2>
                <div
                  className="flex flex-col gap-2"
                  dangerouslySetInnerHTML={{ __html: extendedDescriptionHtml }}
                />
              </div>
              <div
                id="event_info_desktop"
                className="hidden flex-col border-b-2 border-matteBlack p-10"
              >
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
              <div
                id="image"
                className="flex items-start justify-center px-8 pb-8 pt-0 md:pt-8"
              >
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
              <ActionSection
                offeringType={
                  offering.attributes.offering_type?.data.attributes.Name
                }
                info={offeringTypeInfo}
              />
            </div>
            <div
              id="about_offering_mobile"
              className="flex flex-col border-b-2 border-matteBlack p-10 md:hidden"
            >
              <h2 className="pb-4 text-2xl">
                {texts.attributes.about_offering_title}
              </h2>
              <div
                className="flex flex-col gap-2"
                dangerouslySetInnerHTML={{ __html: extendedDescriptionHtml }}
              />
            </div>
            <div
              id="event_info_mobile"
              className="flex flex-col p-10 md:hidden"
            >
              <h2 className="pb-4 text-2xl">
                {texts.attributes.event_info_title}
              </h2>
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: eventInfoHtml }}
              />
            </div>
          </div>
        </Section>
      </div>
      <OtherOfferings otherOfferings={otherOfferings} />
    </div>
  );
};

const ActionSection = (props: {
  offeringType: string | undefined;
  info: unknown;
}) => {
  console.log(props.offeringType);
  if (!props.offeringType) return null;

  if (["One-one-one", "Open session"].includes(props.offeringType)) {
    return <OnePriceOneButton info={props.info} />;
  }
  if (props.offeringType === "Class") {
    return <TwoPricesOneButton info={props.info} />;
  }

  return null;
};

const OnePriceOneButton = (props: { info: unknown }) => {
  const offeringTypeInfo = props.info as {
    actionButtonText: string;
    price: number;
  };

  return (
    <>
      <div className="flex items-center justify-center border-y-2 border-matteBlack bg-mint px-8 py-3 text-xl hover:bg-matteBlack hover:text-eggWhite">
        <p>{offeringTypeInfo.actionButtonText}</p>
      </div>

      <div className="flex items-center justify-center border-b-2 border-matteBlack px-8 py-3 text-xl md:border-b-0">
        <p>{offeringTypeInfo.price}</p>
      </div>
    </>
  );
};

const TwoPricesOneButton = (props: { info: unknown }) => {
  const offeringTypeInfo = props.info as {
    monthlyPrice: string | undefined;
    monthlyPriceSubtitle: string | undefined;
    yearlyPrice: string | undefined;
    yearlyPriceSubtitle: string | undefined;
    monthlyPricePaymentLink: string;
    yearlyPricePaymentLink: string;
    actionButtonText: string;
  };
  return (
    <>
      <div className="flex items-center justify-center border-y-2 border-matteBlack bg-mint px-8 py-3 text-xl hover:bg-matteBlack hover:text-eggWhite">
        <p>{offeringTypeInfo.actionButtonText}</p>
      </div>
      <div className="flex items-center justify-center border-b-2 border-matteBlack text-xl md:border-b-0">
        {offeringTypeInfo.monthlyPrice && (
          <a className="flex flex-1 flex-col items-center justify-center px-8 py-3">
            <p className="text-xl">{offeringTypeInfo.monthlyPrice}</p>
            <p className="text-center text-sm">
              {offeringTypeInfo.monthlyPriceSubtitle}
            </p>
          </a>
        )}
        {!!offeringTypeInfo.monthlyPrice && !!offeringTypeInfo.yearlyPrice && (
          <div className="h-full w-[2px] bg-matteBlack" />
        )}

        {offeringTypeInfo.yearlyPrice && (
          <a className="flex flex-1 flex-col items-center justify-center px-8 py-3">
            <p className="text-xl">{offeringTypeInfo.yearlyPrice}</p>
            <p className="text-center text-sm">
              {offeringTypeInfo.yearlyPriceSubtitle}
            </p>
          </a>
        )}
      </div>
    </>
  );
};

export default Page;
