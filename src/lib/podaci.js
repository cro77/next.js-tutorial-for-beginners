import { unstable_noStore as noStore } from 'next/cache';

import { konekcijaBP } from "./bp";
import { Objava, Korisnik } from "./modeli";

/*
const korisnici = [
  {id: 1, ime: "Ivo"},
  {id: 2, ime: "Ante"},
  {id: 3, ime: "Pero"},
  {id: 4, ime: "Marko"}
];

const objave = [
  {id: 1, naslov: "Objava 1", tekst: "Ovo je objava broj 1", idKorisnika: 1},
  {id: 2, naslov: "Objava 2", tekst: "Ovo je objava broj 2", idKorisnika: 2},
  {id: 3, naslov: "Objava 3", tekst: "Ovo je objava broj 3", idKorisnika: 3},
  {id: 4, naslov: "Objava 4", tekst: "Ovo je objava broj 4", idKorisnika: 4}
];
*/

export const dohvatiObjave = async () => {
  try {
    konekcijaBP();

    const objave = await Objava.find();
    return objave;
  } catch(greska) {
    console.log(greska);
    throw new Error("Greška prilikom dohvaćanja objava!");
  }
}

export const dohvatiObjavu = async (niz) => {
  try {
    konekcijaBP();

    const objava = await Objava.findOne({niz});
    return objava;
  } catch(greska) {
    console.log(greska);
    throw new Error("Greška prilikom dohvaćanja objave!");
  }
}

export const dohvatiKorisnika = async (id) => {
  noStore();
  
  try {
    konekcijaBP();

    const korisnik = await Korisnik.findById(id);
    return korisnik;
  } catch(greska) {
    console.log(greska);
    throw new Error("Greška prilikom dohvaćanja korisnika!");
  }
}

export const dohvatiKorisnike = async () => {
  try {
    konekcijaBP();

    const korisnici = await Korisnik.find();
    return korisnici;
  } catch(greska) {
    console.log(greska);
    throw new Error("Greška prilikom dohvaćanja korisnika!");
  }
}