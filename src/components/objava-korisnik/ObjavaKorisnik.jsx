import Image from 'next/image';

import styles from './objavaKorisnik.module.css';
import { dohvatiKorisnika } from '@/lib/podaci';

// dohvat podataka s API
/*
const dohvatiPodatkeKorisnika = async (idKorisnika) => {
  const odgovor = await fetch(`https://jsonplaceholder.typicode.com/users/${idKorisnika}`, {cache: "no-store"});

  if(!odgovor.ok) {
    throw new Error("Greška")
  }

  return odgovor.json();
}
*/

const ObjavaKorisnik = async ({idKorisnika}) => {

  // dohvat podataka s API
  // const korisnik = await dohvatiPodatkeKorisnika(idKorisnika);
  const korisnik = await dohvatiKorisnika(idKorisnika);

  return (
    <div className={styles.spremnik}>
      <Image src={korisnik?.slika ? korisnik.slika : "/nema_slike.png"} alt="" width={50} height={50}  className={styles.slikaKorisnika} />
      <div className={styles.tekstovi}>
        <span className={styles.naslov}>Autor</span>
        <span className={styles.korisnickoIme}>{korisnik?.korisnickoIme}</span>
      </div>
    </div>
  )
}

export default ObjavaKorisnik;