"use client"

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import styles from './obrazacRegistracije.module.css';
import { registracija } from '@/lib/akcije';

const ObrazacRegistracije = () => {

  const [state, formAction] = useFormState(registracija, undefined);

  const usmjerivac = useRouter();

  useEffect(() => {
    state?.uspjeh && usmjerivac.push('/prijava');
  }, [state?.uspjeh, usmjerivac]);

  return (
    <form action={formAction} className={styles.obrazac}>
      <input type="text" placeholder="korisničko ime" name="korisnickoIme" />
      <input type="email" placeholder="e pošta" name="ePosta" />
      <input type="password" placeholder="zaporka" name="zaporka" />
      <input type="password" placeholder="potvrda zaporke" name="potvrdaZaporke" />
      <button>Registracija</button>
      {state?.greska}
      <Link href="/prijava">Već imate korisnički račun? <b>Prijava</b></Link>
    </form>
  )
}

export default ObrazacRegistracije;