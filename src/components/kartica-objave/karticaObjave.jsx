import Image from 'next/image';
import Link from 'next/link';

import styles from './karticaObjave.module.css';

const KarticaObjave = ({objava}) => {

  const datum = new Date(objava.createdAt);

  return (
    <div className={styles.spremnik}>
      <div className={styles.vrh}>
        {
          objava.slika
          &&
          <div className={styles.slikaSpremnik}>
            <Image src={objava.slika} alt="" fill className={styles.slika} />
          </div>
        }
        <span className={styles.datum}>{datum.toLocaleDateString().split(" ").join("").slice(0, -1)}</span>
      </div>
      <div className={styles.dno}>
        <h1 className={styles.naslov}>{objava.naslov}</h1>
        <p className={styles.opis}>{objava.opis}</p>
        <Link href={`/blog/${objava.niz}`} className={styles.poveznica}>VIŠE</Link>
      </div>
    </div>
  )
}

export default KarticaObjave;