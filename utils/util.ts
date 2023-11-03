import { ERROR_MESSAGE } from "../const/errorMessage";

export function spaceToDash(string: string): string {
  return string.replaceAll(" ", "-");
}

export function extractFileName(fileName: string): string {
  const extIdx = fileName.lastIndexOf(".");
  const hasPeriod = extIdx !== -1;
  if (!hasPeriod) throw new Error(ERROR_MESSAGE.UTIL.MUST_CONTAIN_PERIOD);
  return fileName.slice(0, extIdx);
}
