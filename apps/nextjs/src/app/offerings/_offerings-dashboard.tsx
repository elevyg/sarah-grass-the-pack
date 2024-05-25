"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { type Offering } from "strapi-types/types/api/offering";
import { type OfferingType } from "strapi-types/types/api/offering-type";
import { api } from "~/trpc/react";
import { stringTimeToDate } from "~/utils/indext";

interface Props {
  initialOfferings: Offering[];
  offeringTypes: OfferingType[];
}
const OfferingsDashboard = ({ initialOfferings, offeringTypes }: Props) => {
  const [selectedOfferingType, setSelectedOfferingType] = useState<
    number | undefined
  >();

  const offerings = api.getOfferings.useQuery(
    { offeringTypeId: selectedOfferingType, offeringTypeInfo: true },
    {
      initialData: initialOfferings,
    },
  );

  const lastRow =
    offerings.data.length % 3 === 0 ? 0 : Math.floor(offerings.data.length / 3);

  return (
    <div className="h-full w-full">
      <div className="flex flex-wrap items-center gap-4 border-b-2 border-matteBlack p-4">
        <p className="heading-5 hidden md:block">Offering Type</p>
        {offeringTypes.map((type) => (
          <button
            className={
              "rounded-md border-[1px] border-matteBlack px-2 py-1 " +
              (selectedOfferingType === type.id
                ? "bg-matteBlack text-yellow"
                : "")
            }
            onClick={() =>
              setSelectedOfferingType((prev) => {
                if (prev === type.id) return undefined;
                return type.id;
              })
            }
            key={type.id}
          >
            {type.attributes.Name}
          </button>
        ))}
      </div>
      {offerings.isFetching && selectedOfferingType !== undefined ? (
        <div className="flex min-h-[50vh] w-full flex-1 items-center justify-center ">
          <p className="heading-2-az">Looking for offerings...</p>
        </div>
      ) : (
        <div className={`grid grid-cols-1 md:mb-16 md:grid-cols-3`}>
          {offerings.data.map((offering) => {
            const { startingDate, endingDate, startingTime, endingTime } =
              formatDate(offering);

            const actionButtonText = (
              offering.attributes?.offeringTypeInfo as []
            )?.at(
              0,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
            )?.shortActionButtonText as string;
            return (
              <div
                key={offering.id}
                className={`flex flex-col justify-between border-b-2 border-matteBlack last:border-b-0 md:border-r-2 md:last:border-b-2`}
              >
                <div className="p-8">
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl ">
                    {offering.attributes.square_image && (
                      <Image
                        src={
                          offering.attributes.square_image.data.attributes
                            .formats.medium.url
                        }
                        alt={offering.attributes.title}
                        fill
                      />
                    )}
                  </div>
                  <h2 className="heading-4 mb-4 mt-6">
                    {offering.attributes.title}
                  </h2>
                  <h3 className="heading-2-az mb-6">
                    {offering.attributes.instructors?.data
                      .map((instructor) => instructor.attributes.full_name)
                      .join(", ")}
                  </h3>
                  <div className="heading-2-az mb-8 flex flex-col items-start text-start">
                    <p>{offering.attributes.days}</p>
                    {startingDate && endingDate && (
                      <p>{`${startingDate}-${endingDate}`}</p>
                    )}
                    {startingTime && endingTime && (
                      <p>{`${startingTime}-${endingTime} EST`}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center border-t-2 border-matteBlack p-4">
                  <Link href={`/offerings/${offering.attributes.slug}`}>
                    <p>{actionButtonText}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OfferingsDashboard;

const formatDate = (offering: Offering) => {
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

  return { startingDate, endingDate, startingTime, endingTime };
};
