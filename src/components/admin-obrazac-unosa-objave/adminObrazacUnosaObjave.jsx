"use client"

import { useFormState } from 'react-dom';

import { dodajObjavu } from '@/lib/akcije';
import styles from './adminObrazacUnosaObjave.module.css';

const AdminObrazacUnosaObjave = ({idKorisnika}) => {

  const [state, formAction] = useFormState(dodajObjavu, undefined);

  return (
    <form action={formAction} className={styles.spremnik}>
      <h1>Dodavanje nove objave</h1>
      <input type="hidden" name="idKorisnika" value={idKorisnika} />
      <input type="text" name="naslov" placeholder="naslov objave" />
      <input type="text" name="niz" placeholder="niz" />
      <input type="text" name="slika" placeholder="slika" />
      <textarea name="opis" rows={10} placeholder="opis objave"></textarea>
      <button>Dodaj</button>
      {state && state.greska}
    </form>
  )
}

export default AdminObrazacUnosaObjave;