import { NextResponse } from 'next/server';

import { konekcijaBP } from '@/lib/bp';
import { Objava } from '@/lib/modeli';

export const GET = async (zahtjev) => {
  try{
    konekcijaBP();

    const objave = await Objava.find();

    return NextResponse.json(objave);
  } catch(greska) {
    console.log(greska);
    throw new Error("Greška prilikom dohvaćenja objava!")
  }
}