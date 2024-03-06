import Image from 'next/image';

import styles from './oNama.module.css';

export const metadata = {
  title: 'O nama',
  description: 'Next.js aplikacija stranica o nama',
}

const StranicaONama = () => {

  // console.log("Client Component Parent & Server Component Child");

  return (
    <div className={styles.spremnik}>
      <div className={styles.tekstSpremnik}>
        <h2 className={styles.podnaslov}>O agenciji</h2>
        <h1 className={styles.naslov}>Stvaramo digitalne ideje koje su veće, odvažnije, hrabrije i bolje</h1>
        <p className={styles.opis}>Stvaramo digitalne ideje koje su veće, odvažnije, hrabrije i bolje. Vjerujemo u fleksibilnost i preciznost dobrih ideja. Mi smo najbolji pružatelj rješenja za savjetovanje i financije. Širok raspon usluga razvoja weba i softvera.</p>
        <div className={styles.kutije}>
          <div className={styles.kutija}>
            <h1>10 K+</h1>
            <p>Godine iskustva</p>
          </div>
          <div className={styles.kutija}>
            <h1>10 K+</h1>
            <p>Godine iskustva</p>
          </div>
          <div className={styles.kutija}>
            <h1>10 K+</h1>
            <p>Godine iskustva</p>
          </div>
        </div>
      </div>
      <div className={styles.slikaSpremnik}>
        <Image src="/o_nama.png" alt="" fill className={styles.slika} />
      </div>
    </div>
  )
}

export default StranicaONama;