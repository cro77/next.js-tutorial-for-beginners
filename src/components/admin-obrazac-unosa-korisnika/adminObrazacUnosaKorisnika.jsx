"use client"

import { useFormState } from 'react-dom';

import { dodajKorisnika } from '@/lib/akcije';
import styles from './adminObrazacUnosaKorisnika.module.css';

const AdminObrazacUnosaKorisnika = () => {

  const [state, formAction] = useFormState(dodajKorisnika, undefined);

  return (
    <form action={formAction} className={styles.spremnik}>
      <h1>Dodavanje novog korisnika</h1>
      <input type="text" name="korisnickoIme" placeholder="korisničko ime" />
      <input type="text" name="ePosta" placeholder="e pošta" />
      <input type="password" name="zaporka" placeholder="zaporka" />
      <input type="text" name="slika" placeholder="slika" />
      <select name="administrator">
        <option value="false">Administrator?</option>
        <option value="false">Ne</option>
        <option value="true">Da</option>
      </select>
      <button>Dodaj</button>
      {state && state.greska}
    </form>
  )
}

export default AdminObrazacUnosaKorisnika;