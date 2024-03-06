import Image from 'next/image';

import { dohvatiKorisnike } from '@/lib/podaci';
import { brisanjeKorisnika } from '@/lib/akcije';
import styles from './adminPregledKorisnika.module.css';

const AdminPregledKorisnika = async () => {

  const korisnici = await dohvatiKorisnike();

  return (
    <div className={styles.spremnik}>
      <h1>Korisnici</h1>
      {
        korisnici.map(korisnik => (
          <div className={styles.korisnik} key={korisnik.id}>
            <div className={styles.detalj}>
              <Image src={korisnik.slika || "/nema_slike.png"} alt="" width={50} height={50} />
              <span className={styles.imeKorisnika}>{korisnik.korisnickoIme}</span>
            </div>
            <form action={brisanjeKorisnika}>
              <input type="hidden" name="id" value={korisnik.id} />
              <button className={styles.gumbZaBrisanje}>Brisanje</button>
            </form>
          </div>
        ))
      }
    </div>
  )
}

export default AdminPregledKorisnika;