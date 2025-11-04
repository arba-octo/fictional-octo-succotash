import type { OAuthConfig } from 'next-auth/providers';
import type { TokenSet } from '@auth/core/types';

export interface MailRuProfile {
  sub?: string;
  id?: string;
  user_id?: string;
  email?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  first_name?: string;
  last_name?: string;
  picture?: string;
  avatar?: string;
}

const  authMailru = <P extends MailRuProfile = MailRuProfile>(): OAuthConfig<P> => ({
  id: 'mailru',
  name: 'Mail.ru',
  type: 'oauth',
  checks: ['state'],
  authorization: {
    url: 'https://o2.mail.ru/login',
    params: { response_type: 'code', scope: 'userinfo' },
  },
  token: 'https://o2.mail.ru/token',
  userinfo: {
    url: 'https://o2.mail.ru/userinfo',
    async request({ tokens, provider }: { tokens: TokenSet; provider: OAuthConfig<P> }) {
      if (!tokens?.access_token) {
        throw new Error('[MailRu] Missing access_token before userinfo request');
      }

      const base = (provider.userinfo)?.url ?? 'https://o2.mail.ru/userinfo';
      const u = new URL(base);

      u.searchParams.set('access_token', String(tokens.access_token));
      const res = await fetch(u.toString(), {
        method: 'GET',
        cache: 'no-store',
        headers: { Accept: 'application/json' },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch Mail.ru userinfo');
      }

      return await res.json();
    },
  },
  profile(p) {
    const name = p.name
        || [p.first_name, p.last_name].filter(Boolean).join(' ')
        || [p.given_name, p.family_name].filter(Boolean).join(' ')
        || 'user';

    return {
      id: String(p.sub ?? p.id ?? p.user_id),
      name,
      email: p.email ?? null,
      image: null,
    };
  },
});

export default authMailru;
