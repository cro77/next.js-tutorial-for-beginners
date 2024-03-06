"use client"

import { useFormState } from 'react-dom';
import Link from 'next/link';

import styles from './obrazacPrijave.module.css';
import { prijava } from '@/lib/akcije';

const ObrazacPrijave = () => {

  const [state, formAction] = useFormState(prijava, undefined);

  return (
    <form action={formAction} className={styles.obrazac}>
      <input type="text" placeholder="korisničko ime" name="korisnickoIme" />
      <input type="password" placeholder="zaporka" name="zaporka" />
      <button>Prijava</button>
      {state?.greska}
      <Link href="/registracija">Nemate korisnički račun? <b>Registracija</b></Link>
    </form>
  )
}

export default ObrazacPrijave;