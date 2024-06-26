"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { type Offering } from "strapi-types/types/api/offering";
import { type OfferingType } from "strapi-types/types/api/offering-type";
import { api } from "~/trpc/react";
import { formatDate } from "~/utils/formatDate";

const getMaxLastRow = (numero: number, divisor: number): number =>
  numero % divisor === 0 ? numero : getMaxLastRow(numero + 1, divisor);

const NUMBER_OF_COLUMNS = 3;

interface Props {
  initialOfferings: Offering[];
  offeringTypes: OfferingType[];
  actionButtonTitle: string;
  allOfferingsLabel: string;
}
const OfferingsDashboard = ({
  initialOfferings,
  offeringTypes,
  actionButtonTitle,
  allOfferingsLabel,
}: Props) => {
  const [selectedOfferingType, setSelectedOfferingType] = useState<
    number | undefined
  >();

  const offerings = api.getOfferings.useQuery(
    { offeringTypeId: selectedOfferingType, offeringTypeInfo: true },
    {
      initialData: initialOfferings,
    },
  );

  const maxLastRow = getMaxLastRow(offerings.data.length, NUMBER_OF_COLUMNS);

  return (
    <div className="h-full w-full">
      <div className="flex flex-wrap items-center gap-4 border-b-2 border-matteBlack p-4">
        <p className="heading-5 hidden md:block">Offering Type</p>
        <button
          className={
            "rounded-md border-[1px] border-matteBlack px-2 py-1 " +
            (selectedOfferingType === undefined
              ? "bg-matteBlack text-eggWhite"
              : "")
          }
          onClick={() => setSelectedOfferingType(undefined)}
        >
          {allOfferingsLabel}
        </button>
        {offeringTypes.map((type) => (
          <button
            className={
              "rounded-md border-[1px] border-matteBlack px-2 py-1 " +
              (selectedOfferingType === type.id
                ? "bg-matteBlack text-eggWhite"
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
        <div className={`grid grid-cols-1 md:grid-cols-3`}>
          {offerings.data.map((offering, index) => {
            const { startingDate, endingDate, startingTime, endingTime } =
              formatDate(offering);

            const isLastRow = index + 1 > maxLastRow - NUMBER_OF_COLUMNS;

            return (
              <div
                key={offering.id}
                className={`flex flex-col justify-between border-b-2 border-matteBlack last:border-b-0 md:border-r-2 ${isLastRow ? "md:border-b-0" : ""} `}
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
                <Link href={`/offerings/${offering.attributes.slug}`}>
                  <div className="flex items-center justify-center border-t-2 border-matteBlack p-4">
                    <p className="heading-5">{actionButtonTitle}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OfferingsDashboard;
