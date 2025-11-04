import NextAuth from 'next-auth';
import Yandex from 'next-auth/providers/yandex';
import VK from 'next-auth/providers/vk';
import Mailru from '@/lib/auth/authMailru';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';

const apiVersion = '5.131'; // https://vk.com/dev/versions

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Yandex({
      profile(profile) {
        return {
          id: profile.id,
          name: profile.display_name ?? profile.real_name ?? profile.first_name,
          email: profile.default_email ?? profile.emails?.[0] ?? null,
          image: null,
        };
      }
    }),
    Mailru,
    VK({
      checks: ['state'], // PKCE не нужен
      authorization: `https://oauth.vk.ru/authorize?scope=email&v=${apiVersion}`,
      userinfo: {
        url: `https://api.vk.ru/method/users.get?fields=photo_100&v=${apiVersion}`,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        async request({ tokens, provider }) {
          const profile = await fetch(provider.userinfo?.url as URL, {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`,
              'User-Agent': 'authjs',
            },
          }).then(async (res) => await res.json());

          profile.response[0].email = tokens.email ? tokens.email : null;

          return profile.response[0];
        },
      },
      profile(result) {
        return {
          id: `${result.id}`,
          name: `${result.first_name ?? 'user'}${result.last_name ? ` ${result.last_name}` : ''}`,
          image: null,
          email: `vk-${result.id}-yarmy@qigtnxjmayjdobhg.yarmy`,
        };
      },
      token: {
        url: 'https://oauth.vk.ru/access_token',
        // eslint-disable-next-line
        conform: async (response: any) => {
          const data = await response.json();

          return new Response(
            JSON.stringify({
              ...data,
              token_type: 'Bearer',
            }),
            { headers: { 'content-type': 'application/json' }, status: response.status }
          );
        },
      },
    })
  ],
  session: { strategy: 'database' },
});

export const GET = handlers.GET;
export const POST = handlers.POST;
