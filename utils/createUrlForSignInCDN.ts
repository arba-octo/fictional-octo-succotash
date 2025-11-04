import { createHash } from 'crypto';
import { getUnixTime, addDays } from 'date-fns';

type Props = {
  hostname: string
  path: string
}

export function createUrlForSignInCDN({ hostname, path }: Props) {
  const secret = process.env.SECURE_KEY_FOR_BUCKET;
  const expires = unixTimestamp();
  const protocol = 'https://';
  const link = `${expires}${path} ${secret}`;

  const md5Hasher = createHash('md5');
  const base64 = md5Hasher.update(link).digest('base64');
  const hashToBase64 = base64
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  const url= `${protocol}${hostname}${path}?md5=${hashToBase64}&expires=${expires}`;

  return url;
}

function unixTimestamp () {
  const date = new Date();
  const newDate = addDays(date, 1);
  const unixTime = getUnixTime(newDate);

  return unixTime;
}
