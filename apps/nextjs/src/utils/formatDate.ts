import type { Offering } from "strapi-types/types/api/offering";
import { stringTimeToDate } from "~/utils/stringTimeToDate";

export const formatDate = (offering: Offering) => {
  console.log("DATE!", offering.attributes.starting_date);
  const startingDate = offering.attributes.starting_date
    ? new Date(offering.attributes.starting_date).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        timeZone: "America/New_York",
      })
    : null;

  const endingDate = offering.attributes.ending_date
    ? new Date(offering.attributes.ending_date).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        timeZone: "America/New_York",
      })
    : null;

  const startingTime = offering.attributes.starting_time
    ? stringTimeToDate(
        offering.attributes.starting_time as unknown as string,
      ).toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
        timeZone: "America/New_York",
      })
    : null;

  const endingTime =
    offering.attributes.ending_time &&
    stringTimeToDate(
      offering.attributes.ending_time as unknown as string,
    ).toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
      timeZone: "America/New_York",
    });

  return { startingDate, endingDate, startingTime, endingTime };
};
