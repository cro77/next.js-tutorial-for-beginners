import KarticaObjave from '@/components/kartica-objave/karticaObjave';
import styles from './blog.module.css';
// import { dohvatiObjave } from '@/lib/podaci';

// dohvat podataka s API
const dohvatiPodatke = async () => {
  const odgovor = await fetch("https://next-js-tutorial-for-beginners.onrender.com/api/blog", {next:{revalidate: 3600}});

  if(!odgovor.ok) {
    throw new Error("Greška")
  }

  return odgovor.json();
}

const StranicaBlog = async () => {

  // console.log(params, searchParams);

  // dohvat podataka s API
  const objave = await dohvatiPodatke();
  
  // dohvat podataka bez API
  // const objave = await dohvatiObjave();

  return (
    <div className={styles.spremnik}>
      {
        objave.map(objava => (
          <div className={styles.objava} key={objava.niz}>
            <KarticaObjave objava={objava} />
          </div>
        ))
      }
    </div>
  )
}

export default StranicaBlog;
