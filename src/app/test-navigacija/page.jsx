"use client"

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const StranicaTestNavigacija = () => {

  // navigacija na strani klijenta
  const usmjerivac = useRouter();
  const imePuta = usePathname();
  const parametriPretrazivanja = useSearchParams();

  const upit = parametriPretrazivanja.get("u");

  console.log(imePuta, upit);

  const rukovanjeKlikom = () => {
    console.log("Kliknuto");
    usmjerivac.push("/");
    // usmjerivac.replace("/");
    // usmjerivac.refresh();
  }

  const natrag = () => {
    usmjerivac.back();
  }

  const naprijed = () => {
    usmjerivac.forward();
  }

  return (
    <div style={{display: "flex", gap: "20px"}}>
      <Link href="/" prefetch={false}>Klikni</Link>
      <button onClick={rukovanjeKlikom}>Preusmjeravanje</button>
      <button onClick={natrag}>Natrag</button>
      <button onClick={naprijed}>Naprijed</button>
    </div>
  )
}

export default StranicaTestNavigacija;