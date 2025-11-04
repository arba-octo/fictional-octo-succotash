import { customAlphabet } from 'nanoid';
import { ALPHABET_NUMBER, ALPHABET_SMALL_LETTERS } from '@/constants/alphabet';

export const nanoidSmallLettersAndNumber = (defaultSize?: number) => {
  const nanoid = customAlphabet(ALPHABET_SMALL_LETTERS + ALPHABET_NUMBER, defaultSize);

  return nanoid();
};

export const nanoidSmallLetters = (defaultSize?: number) => {
  const nanoid = customAlphabet(ALPHABET_SMALL_LETTERS, defaultSize);

  return nanoid;
};
