// import { auth } from '@/lib/auth';
import { rukovanjePrijavomSGithubom } from '@/lib/akcije';
import styles from './prijava.module.css';
import ObrazacPrijave from '@/components/obrazac-prijave/obrazacPrijave';

const StranicaPrijava = () => {

  // const sesija = await auth();
  // console.log(sesija);

  return (
    <div className={styles.spremnik}>
      <div className={styles.omotac}>
        <form action={rukovanjePrijavomSGithubom}>
          <button className={styles.github}>Prijava s Github-om</button>
        </form>
        <ObrazacPrijave />
      </div>
    </div>
  )
}

export default StranicaPrijava;