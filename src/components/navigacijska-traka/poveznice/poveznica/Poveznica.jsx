"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './poveznica.module.css';

const Poveznica = ({stavka}) => {

  const imePuta = usePathname();

  return (
    <Link href={stavka.put} className={`${styles.spremnik} ${imePuta === stavka.put && styles.aktivna}`}>
      {stavka.naslov}
    </Link>
  )
}

export default Poveznica;