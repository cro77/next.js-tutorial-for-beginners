"use server"

import { revalidatePath } from 'next/cache';
import bcrypt from 'bcrypt';

import { signIn, signOut } from '@/lib/auth';
import { konekcijaBP } from './bp';
import { Objava, Korisnik } from './modeli';

/*
export const pozdrav = async () => {
  "use server"

  console.log("pozdrav!");
}
*/

// dodavanje objave
export const dodajObjavu = async (prethodnoStanje, podaciObrasca) => {
  // "use server"

  // const naslov = podaciObrasca.get("naslov");
  // const opis = podaciObrasca.get("opis");
  // const niz = podaciObrasca.get("niz");

  const { naslov, opis, idKorisnika, niz } = Object.fromEntries(podaciObrasca);

  // console.log(podaciObrasca);
  // console.log(naslov, opis, idKorisnika, niz);

  try {
    konekcijaBP();

    const novaObjava = new Objava({
      naslov,
      opis,
      idKorisnika,
      niz
    });

    await novaObjava.save();

    console.log("Nova objava je pohranjena u bazu podataka.");

    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch(greska) {
    return { greska: "Nešto je pošlo krivo!" };
  }
}

// brisanje objave
export const brisanjeObjave = async (podaciObrasca) => {
  // "use server"

  const { id } = Object.fromEntries(podaciObrasca);
  
  try {
    konekcijaBP();

    await Objava.findByIdAndDelete(id);

    console.log("Objava je izbrisana iz baze podataka.");

    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch(greska) {
    return { greska: "Nešto je pošlo krivo!" };
  }
}

// dodavanje korisnika
export const dodajKorisnika = async (prethodnoStanje, podaciObrasca) => {
  
  const { korisnickoIme, ePosta, zaporka, slika } = Object.fromEntries(podaciObrasca);

  // console.log(podaciObrasca);
  // console.log(korisnickoIme, ePosta, zaporka);

  try {
    konekcijaBP();

    const sol = await bcrypt.genSalt(10);
    const hasiranaZaporka = await bcrypt.hash(zaporka, sol);

    const noviKorisnik = new Korisnik({
      korisnickoIme,
      ePosta,
      zaporka: hasiranaZaporka,
      slika
    });

    await noviKorisnik.save();

    console.log("Novi korisnik je pohranjen u bazu podataka.");

    revalidatePath("/admin");
  } catch(greska) {
    return { greska: "Nešto je pošlo krivo!" };
  }
}

// brisanje korisnika
export const brisanjeKorisnika = async (podaciObrasca) => {
  
  const { id } = Object.fromEntries(podaciObrasca);
  
  try {
    konekcijaBP();

    await Objava.deleteMany({ idKorisnika: id });
    await Korisnik.findByIdAndDelete(id);

    console.log("Korisnik je izbrisan iz baze podataka.");

    revalidatePath("/admin");
  } catch(greska) {
    return { greska: "Nešto je pošlo krivo!" };
  }
}

// prijava pomoću github-a
export const rukovanjePrijavomSGithubom = async () => {
  await signIn("github");
}

// odjava
export const rukovanjeOdjavom = async () => {
  await signOut();
}

// registracija
export const registracija = async (prethodnoStanje, podaciObrasca) => {

  const { korisnickoIme, ePosta, zaporka, potvrdaZaporke, slika } = Object.fromEntries(podaciObrasca);

  if(zaporka !== potvrdaZaporke) {
    return { greska: "Zaporka se ne podudara s potvrdom zaporke!" };
  }

  try {
    konekcijaBP();

    const korisnik = await Korisnik.findOne({korisnickoIme});

    if(korisnik) {
      return { greska: "Korisničko ime već postoji u bazi podataka!" };
    }

    const sol = await bcrypt.genSalt(10);
    const hasiranaZaporka = await bcrypt.hash(zaporka, sol);

    const noviKorisnik = new Korisnik({
      korisnickoIme,
      ePosta,
      zaporka: hasiranaZaporka,
      slika
    });

    await noviKorisnik.save();

    console.log("Korisnik je pohranjen u bazu podataka.");
    return { uspjeh: true }
  } catch(greska) {
    return { greska: "Nešto je pošlo krivo!" };
  }

}

// prijava
export const prijava = async (prethodnoStanje, podaciObrasca) => {

  const { korisnickoIme, zaporka } = Object.fromEntries(podaciObrasca);

  try {
    await signIn("credentials", { korisnickoIme, zaporka });
  } catch(greska) {
    // console.log(greska);

    if(greska.message.includes("CredentialsSignin")) {
      return { greska: "Pogrešni podaci za prijavu!" };
    }

    //return { greska: "Nešto je pošlo krivo!" };
    throw greska;
  }
}