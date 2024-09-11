import { GetBirthdateFromID, GetCenturyFromYear } from "~/types";

/** Get the full year from 2 digits year
 * @param { string } year 2 digits year.
 * @returns { string } The full year.
 */
const getCenturyFromYear: GetCenturyFromYear = (year: string): string => {
  const fullYear = new Date().getFullYear().toString();
  const century = parseInt(fullYear.slice(0, 2), 10);

  return parseInt(year, 10) > parseInt(fullYear.slice(2))
    ? `${century - 1}${year}`
    : `${century}${year}`;
};

/** Get the birth date from national id
 * @param { string } national_id The national_id to check.
 * @returns { Date } The birth date.
 */
const getBirthdateFromID: GetBirthdateFromID = (national_id: string): Date => {
  const datePattern = /(\d{2})(\d{2})(\d{2})/;
  const match = datePattern.exec(national_id) || [];

  const [, , month, day] = match;
  let [, year] = match;

  year = getCenturyFromYear(year);

  return new Date(`${year}-${month}-${day}`);
};

export { getBirthdateFromID };
