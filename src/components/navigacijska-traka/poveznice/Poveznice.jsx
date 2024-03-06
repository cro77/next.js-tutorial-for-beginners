"use client"

import { useState } from 'react';
import Image from 'next/image';

import styles from './poveznice.module.css';
import Poveznica from './poveznica/Poveznica';
import { rukovanjeOdjavom } from '@/lib/akcije';

const poveznice = [
  {
    naslov: "Početna",
    put: "/"
  },
  {
    naslov: "O nama",
    put: "/o-nama"
  },
  {
    naslov: "Kontakt",
    put: "/kontakt"
  },
  {
    naslov: "Blog",
    put: "/blog"
  }
]

const Poveznice = ({sesija}) => {

  const [otvoren, postaviOtvoren] = useState(false);

  // privremeno
  // const admin = true;

  return (
    <div className={styles.spremnik}>
      <div className={styles.poveznice}>
        {
          poveznice.map((poveznica) => (
            <Poveznica stavka={poveznica} key={poveznica.naslov} />
          ))
        }
        {
          sesija?.user
          ?
          (
            <>
              {
                sesija.user?.admin
                &&
                <Poveznica stavka={{naslov: "Admin", put: "/admin"}} />
              }
              <form action={rukovanjeOdjavom}>
                <button className={styles.odjava}>Odjava</button>
              </form>
            </>
          )
          :
          (
            <Poveznica stavka={{naslov: "Prijava", put: "/prijava"}} />
          )
        }
      </div>
      { /* Mobilni izbornik */ }
      <Image src="/izbornik.png" alt="" width={28} height={28} className={styles.gumbIzbornika}  onClick={() => postaviOtvoren((prethodna => !prethodna))} />
      {
        otvoren
        &&
        (
          <div className={styles.mobilnePoveznice}>
            {
              poveznice.map((poveznica) => (
                <Poveznica stavka={poveznica} key={poveznica.naslov} />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Poveznice;