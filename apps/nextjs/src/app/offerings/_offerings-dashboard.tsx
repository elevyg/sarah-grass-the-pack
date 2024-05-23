"use client";

import { useState } from "react";
import { type Offering } from "strapi-types/types/api/offering";
import { type OfferingType } from "strapi-types/types/api/offering-type";
import { api } from "~/trpc/react";

interface Props {
  initialOfferings: Offering[];
  offeringTypes: OfferingType[];
}
const OfferingsDashboard = ({ initialOfferings, offeringTypes }: Props) => {
  const offerings = api.getOfferings.useQuery(undefined, {
    initialData: initialOfferings,
  });
  const [selectedOfferingType, setSelectedOfferingType] = useState<
    number | undefined
  >();
  return (
    <div>
      <div className="m-4 flex gap-4">
        {offeringTypes.map((type) => (
          <button
            className={
              "rounded-md border-[1px] border-matteBlack p-2 " +
              (selectedOfferingType === type.id
                ? "text-yellow bg-matteBlack"
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
      {offerings.data.map((offering) => (
        <div key={offering.id}>{offering.attributes.title}</div>
      ))}
    </div>
  );
};

export default OfferingsDashboard;
