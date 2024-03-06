import { dodajObjavu, brisanjeObjave } from '@/lib/akcije';

const StranicaAkcijeNaPosluziteljuTest = () => {
  return (
    <div>
      <form action={dodajObjavu}>
        <input type="text" name="naslov" placeholder="naslov" />
        <input type="text" name="opis" placeholder="opis" />
        <input type="text" name="idKorisnika" placeholder="id korisnika" />
        <input type="text" name="niz" placeholder="niz" />
        <button>Dodaj</button>
      </form>

      <form action={brisanjeObjave}>
        <input type="text" placeholder="id objave" name="id" />
        <button>Brisanje</button>
      </form>
    </div>
  )
}

export default StranicaAkcijeNaPosluziteljuTest;