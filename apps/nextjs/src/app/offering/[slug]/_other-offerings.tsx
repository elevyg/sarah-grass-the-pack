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
        <div className="border-b-2 border-matteBlack py-8 pl-4">
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

  const startingDate = offering.attributes.starting_date
    ? new Date(offering.attributes.starting_date).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
      })
    : null;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const actionButtonText = (offering.attributes.offeringTypeInfo as []).at(
    0,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  )?.shortActionButtonText as string;

  console.log(actionButtonText);

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
      <div className="flex flex-1 p-8">
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
          <div className="flex flex-col justify-center pl-12">
            <p className="paragraph">{offering.attributes.title}</p>
            {offering.attributes.instructors?.data.map((i) => (
              <p className="paragraph mt-4" key={i.id}>
                {i.attributes.full_name}
              </p>
            ))}
          </div>
          <div className="flex h-full w-[20%] flex-col items-start justify-center">
            <ScheduleOrSubtitle schedule={schedule} subtitle={subtitle} />
          </div>
        </div>
      </div>
      <div className="flex w-[15%] flex-col items-center justify-center border-l-2 border-matteBlack">
        <Link href={"/offering/" + offering.attributes.slug}>
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
