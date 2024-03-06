import Link from 'next/link';
import { auth } from '@/lib/auth';

import Poveznice from './poveznice/Poveznice';
import styles from './navigacijskaTraka.module.css';

const NavigacijskaTraka = async () => {

  const sesija = await auth();
  // console.log(sesija);

  return (
    <div className={styles.spremnik}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Poveznice sesija={sesija} />
      </div>
    </div>
  )
}

export default NavigacijskaTraka;