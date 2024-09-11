import { IsValid } from "~/types";
import { getBirthdateFromID } from "~/utils";

/** Check if an ID is valid
 * @param { string } nationalId The nationalId to check.
 * @returns { boolean } Wether the nationalId is valid or not.
 */
const isValid: IsValid = (nationalId: string): boolean => {
  const nationalIdPattern =
    /^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{3}[0-9]{2}$/;

  // check if nationalId is not empty
  if (nationalId === null || nationalId === undefined || nationalId === "")
    return false;

  // clean nationalId to keep only number
  nationalId = nationalId.replace(/[^0-9]/g, "");

  // check nationalId format
  if (!nationalId.match(nationalIdPattern)) return false;

  const birthdate = getBirthdateFromID(nationalId);
  const id =
    birthdate.getFullYear() < 2000
      ? parseInt(nationalId.slice(0, 9))
      : parseInt(`2${nationalId.slice(0, 9)}`);

  return 97 - (id % 97) === parseInt(nationalId.slice(-2));
};

export { isValid };
