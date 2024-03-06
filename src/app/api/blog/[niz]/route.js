import { NextResponse } from 'next/server';

import { konekcijaBP } from '@/lib/bp';
import { Objava } from '@/lib/modeli';


export const GET = async (zahtjev, {params}) => {
  const { niz } = params;

  try{
    konekcijaBP();

    const objava = await Objava.findOne({niz});

    return NextResponse.json(objava);
  } catch(greska) {
    console.log(greska);
    throw new Error("Greška prilikom dohvaćenja objave!")
  }
}


/*
export const DELETE = async (zahtjev, {params}) => {
  const { niz } = params;

  try{
    konekcijaBP();

    await Objava.deleteOne(niz);

    return NextResponse.json("Objava je obrisana!");
  } catch(greska) {
    console.log(greska);
    throw new Error("Greška prilikom brisanja objave!")
  }
}
*/