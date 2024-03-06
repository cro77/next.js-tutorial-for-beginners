import Image from 'next/image';

import styles from './pocetna.module.css';

export default function Home() {
  return (
    <div className={styles.spremnik}>
      <div className={styles.tekstSpremnik}>
        <h1 className={styles.naslov}>Agencija za kreativne misli</h1>
        <p className={styles.opis}>Next.js je okvir za web razvoj otvorenog koda koji pruža web aplikacije temeljene na Reactu s prikazivanjem na strani poslužitelja i generiranjem statične web stranice.</p>
        <div className={styles.gumbi}>
          <button className={styles.gumb}>Saznajte više</button>
          <button className={styles.gumb}>Kontakt</button>
        </div>
        <div className={styles.brendovi}>
          <Image src="/brendovi.png" alt="" fill className={styles.brendSlika}  />
        </div>
      </div>
      <div className={styles.slikaSpremnik}>
        <Image src="/heroj.gif" alt="" fill className={styles.herojSlika} />
      </div>
    </div>
  )
}
