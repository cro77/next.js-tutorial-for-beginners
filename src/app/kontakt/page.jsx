// "use client"

import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';

import styles from './kontakt.module.css';

// const HydrationTestBezSSR = dynamic(() => import("@/components/HydrationTest"), {ssr: false});

export const metadata = {
  title: 'Kontakt',
  description: 'Next.js aplikacija kontakt stranica',
}

const StranicaKontakt = () => {

  /*
  const [klijent, postaviKlijent] = useState(false);

  useEffect(() => {
    postaviKlijent(true);
  }, []);

  const a = Math.random();

  console.log(a);
  */

  return (
    <div className={styles.spremnik}>
      <div className={styles.slikaSpremnik}>
        <Image src="/kontakt.png" alt ="" fill className={styles.slika} />
      </div>
      <div className={styles.obrazacSpremnik}>
        {/*klijent && a*/}
        {/*<HydrationTestBezSSR />*/}
        {/*<div suppressHydrationWarning>{a}</div>*/}
        <form action="" className={styles.obrazac}>
          <input type="text" placeholder="Ime i prezime" />
          <input type="text" placeholder="Adresa e pošte" />
          <input type="text" placeholder="Broj telefona (Nije obavezan)" />
          <textarea name="" id="" cols="30" rows="7" placeholder="Poruka"></textarea>
          <button>Pošalji</button>
        </form>
      </div>
    </div>
  )
}

export default StranicaKontakt;