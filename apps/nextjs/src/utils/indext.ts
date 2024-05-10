export function stringTimeToDate(date: string) {
  const tempTime = date.split(":").map((string) => Number(string));
  const dt = new Date();

  if (
    typeof tempTime[0] == "undefined" ||
    typeof tempTime[1] == "undefined" ||
    typeof tempTime[2] == "undefined"
  )
    throw new Error("Time not parsable");

  dt.setHours(tempTime[0]);
  dt.setMinutes(tempTime[1]);
  dt.setSeconds(tempTime[2]);

  return dt;
}
