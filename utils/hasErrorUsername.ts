import { SIZE_MAX_USERNAME, SIZE_MIN_USERNAME } from '@/constants/size';

const checkMinLength = (value: string) => value.length < SIZE_MIN_USERNAME;
const checkMaxLength = (value: string) => value.length > SIZE_MAX_USERNAME;
const checkFirstChar = (value: string) => ['_', '.'].includes(value[0]);
const checkLastChar = (value: string) => ['_', '.'].includes(value[value.length - 1]);
const checkAllChar = (value: string) => {
  const pattern = /^[\da-z_.]+$/;

  return pattern.test(value);
};
const isNumeric = (str: string): boolean => !/[^0-9]/.test(str);

export const hasErrorUsername = (username: string) => {
  if (checkMinLength(username)) {
    return true;
  }

  if (checkMaxLength(username)) {
    return true;
  }

  if (checkFirstChar(username)) {
    return true;
  }

  if (checkLastChar(username)) {
    return true;
  }

  if (isNumeric(username)) {
    return true;
  }

  if (!checkAllChar(username)) {
    return true;
  }

  return false;
};
