import Link from 'next/link';

const NijePronadena = () => {
  return (
    <div>
      <h2>Nije pronađena</h2>
      <p>Nažalost, stranica koju tražite ne postoji.</p>
      <Link href="/">Povratak na početnu stranicu</Link>
    </div>
  )
}

export default NijePronadena;