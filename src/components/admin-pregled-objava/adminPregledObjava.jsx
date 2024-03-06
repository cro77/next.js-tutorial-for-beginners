import Image from 'next/image';

import { dohvatiObjave } from '@/lib/podaci';
import { brisanjeObjave } from '@/lib/akcije';
import styles from './adminPregledObjava.module.css';

const AdminPregledObjava = async () => {

  const objave = await dohvatiObjave();

  return (
    <div className={styles.spremnik}>
      <h1>Objave</h1>
      {
        objave.map(objava => (
          <div className={styles.objava} key={objava.id}>
            <div className={styles.detalj}>
              <Image src={objava.slika || "/nema_slike.png"} alt="" width={50} height={50} />
              <span className={styles.naslovObjave}>{objava.naslov}</span>
            </div>
            <form action={brisanjeObjave}>
              <input type="hidden" name="id" value={objava.id} />
              <button className={styles.gumbZaBrisanje}>Brisanje</button>
            </form>
          </div>
        ))
      }
    </div>
  )
}

export default AdminPregledObjava;