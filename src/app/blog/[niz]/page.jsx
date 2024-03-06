import Image from 'next/image';
import { Suspense } from 'react';

import styles from './stranicaObjava.module.css';
import ObjavaKorisnik from '@/components/objava-korisnik/ObjavaKorisnik';
import { dohvatiObjavu } from '@/lib/podaci';

// dohvat podataka s API
const dohvatiPodatke = async (niz) => {
  const odgovor = await fetch(`https://next-js-tutorial-for-beginners.onrender.com/api/blog/${niz}`, {cache: "no-store"});

  if(!odgovor.ok) {
    throw new Error("Greška")
  }

  return odgovor.json();
}

export const generateMetadata = async ({params}) => {
  const { niz } = params;

  const objava = await dohvatiObjavu(niz);

  return {
    title: objava.naslov,
    description: objava.opis
  };
}

const StranicaObjava = async ({params}) => {
  
  const { niz } = params;

  // dohvat podataka s API
  const objava = await dohvatiPodatke(niz);

  // dohvat podataka bez API
  // const objava = await dohvatiObjavu(id);

  const datum = new Date(objava.createdAt);

  return (
    <div className={styles.spremnik}>
      {
        objava.slika
        &&
        <div className={styles.slikaSpremnik}>
          <Image src={objava.slika} alt="" fill  className={styles.slika}/>
        </div>
      }
      <div className={styles.tekstSpremnik}>
        <h1 className={styles.naslov}>{objava.naslov}</h1>
        <div className={styles.detalji}>
          {
            objava
            &&
            <Suspense fallback={<div>Učitavanje...</div>}>
              <ObjavaKorisnik idKorisnika={objava.idKorisnika} />
            </Suspense>
          }
          <div className={styles.detaljiTekst}>
            <span className={styles.detaljNaslov}>Objavljeno</span>
            <span className={styles.detaljVrijednost}>{datum.toLocaleDateString().split(" ").join("").slice(0, -1)}</span>
          </div>
        </div>
        <div className={styles.sadrzaj}>
          {objava.opis}
        </div>
      </div>
    </div>
  )
}

export default StranicaObjava;
