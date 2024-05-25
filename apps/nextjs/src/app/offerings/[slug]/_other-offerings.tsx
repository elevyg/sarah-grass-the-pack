import Image from "next/image";
import Link from "next/link";
import { type Offering } from "strapi-types/types/api/offering";
import Markdown from "~/app/_components/markdown";
import Section from "~/app/_components/section";
import { stringTimeToDate } from "~/utils/indext";
import markdownToHtml from "~/utils/markdownToHtml";

const OtherOfferings = async ({
  otherOfferings,
}: {
  otherOfferings: Offering[];
}) => {
  return (
    <Section lowerBorderOnly color="lavander">
      <div className="w-full">
        <div className="border-b-2 border-matteBlack bg-lavander py-8 pl-4 md:bg-none">
          <h2 className="heading-3">Other offerings</h2>
        </div>
        <div className="flex w-full flex-col justify-between">
          {otherOfferings.map((offering, index) => (
            <Offering key={offering.id} offering={offering} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

const Offering = async ({
  offering,
  index,
}: {
  offering: Offering;
  index: number;
}) => {
  const subtitle = offering.attributes.subtitle
    ? await markdownToHtml(offering.attributes.subtitle)
    : undefined;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const actionButtonText = (offering.attributes.offeringTypeInfo as [])?.at(
    0,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  )?.shortActionButtonText as string;

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

  const schedule =
    startingDate &&
    endingDate &&
    startingTime &&
    endingTime &&
    offering.attributes.days
      ? {
          days: offering.attributes.days,
          startingDate,
          endingDate,
          startingTime,
          endingTime,
        }
      : undefined;

  return (
    <div
      key={offering.id}
      className={
        "flex w-full flex-1" +
        (index % 2 === 0 ? " border-b-2 border-matteBlack" : "")
      }
    >
      <div className="flex min-w-[70%] flex-1 p-4 md:w-full md:p-8">
        <div className="h-[113px] w-[113px] overflow-hidden rounded-[1.5rem]">
          <Image
            src={
              offering.attributes.square_image.data.attributes.formats.small.url
            }
            alt={offering.attributes.title}
            width={110}
            height={110}
          />
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col justify-center pl-6 md:pl-12">
            <p className="paragraph">{offering.attributes.title}</p>
            {offering.attributes.instructors?.data.map((i) => (
              <p className="caption md:paragraph mt-4" key={i.id}>
                {i.attributes.full_name}
              </p>
            ))}
          </div>
          <div className="hidden h-full w-[20%] flex-col items-start justify-center md:flex ">
            <ScheduleOrSubtitle schedule={schedule} subtitle={subtitle} />
          </div>
        </div>
      </div>
      <div className="flex min-w-[30%] flex-1 flex-col items-center justify-center border-l-2 border-matteBlack md:w-[15%]">
        <Link href={"/offerings/" + offering.attributes.slug}>
          <p className="paragraph">{actionButtonText}</p>
        </Link>
      </div>
    </div>
  );
};

const ScheduleOrSubtitle = ({
  subtitle,
  schedule,
}: {
  subtitle?: string;
  schedule?: {
    days: string;
    startingDate: string;
    endingDate: string;
    startingTime: string;
    endingTime: string;
  };
}) => {
  if (!!subtitle) {
    return <Markdown content={subtitle} />;
  }
  if (schedule) {
    return (
      <>
        <p className="paragraph pb-1">{schedule.days}</p>
        <p className="paragraph pb-1">{`${schedule.startingDate}-${schedule.endingDate}`}</p>
        <p className="paragraph">{`${schedule.startingTime}-${schedule.endingTime}`}</p>
      </>
    );
  }
  return null;
};

export default OtherOfferings;
