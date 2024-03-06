import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

import { konekcijaBP } from './bp';
import { Korisnik } from './modeli';
import { autentKonfig } from './auth.config';

const prijava = async (vjerodajnice) => {
  try {
    konekcijaBP();

    const korisnik = await Korisnik.findOne({ korisnickoIme: vjerodajnice.korisnickoIme });

    if(!korisnik) {
      throw new Error("Pogrešni podaci za prijavu!");
    }

    const provjeraZaporke = await bcrypt.compare(vjerodajnice.zaporka, korisnik.zaporka);

    if(!provjeraZaporke) {
      throw new Error("Pogrešni podaci za prijavu!");
    }

    return korisnik;
  } catch(greska) {
    // console.log(greska);
    throw new Error("Greška prilikom prijave!");
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  ...autentKonfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const korisnik = await prijava(credentials);

          return korisnik;
        } catch(greska) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile);
      
      if(account.provider === "github") {
        konekcijaBP();

        try {
          const korisnik = await Korisnik.findOne({ ePosta: profile.email });

          if(!korisnik) {
            const noviKorisnik = new Korisnik({
              korisnickoIme: profile.login,
              ePosta: profile.email,
              slika: profile.avatar_url
            });

            await noviKorisnik.save();
          }
        } catch(greska) {
          console.log(greska);
          return false;
        }
      }
      return true;
    },
    ...autentKonfig.callbacks,
  }
});