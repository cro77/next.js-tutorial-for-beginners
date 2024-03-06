import { Suspense } from 'react';

import styles from './admin.module.css';
import AdminPregledKorisnika from '@/components/admin-pregled-korisnika/adminPregledKorisnika';
import AdminObrazacUnosaKorisnika from '@/components/admin-obrazac-unosa-korisnika/adminObrazacUnosaKorisnika';
import AdminPregledObjava from '@/components/admin-pregled-objava/adminPregledObjava';
import AdminObrazacUnosaObjave from '@/components/admin-obrazac-unosa-objave/adminObrazacUnosaObjave';
import { auth } from '@/lib/auth';

const StranicaAdmin = async () => {

  const sesija = await auth();

  return (
    <div className={styles.spremnik}>
      <div className={styles.red}>
        <div className={styles.stupac}>
          <Suspense fallback={<div>Učitavanje...</div>}>
            <AdminPregledObjava />
          </Suspense>
        </div>
        <div className={styles.stupac}>
          <AdminObrazacUnosaObjave idKorisnika={sesija.user.id} />
        </div>
      </div>
      <div className={styles.red}>
        <div className={styles.stupac}>
          <Suspense fallback={<div>Učitavanje...</div>}>
            <AdminPregledKorisnika />
          </Suspense>
        </div>
        <div className={styles.stupac}>
          <AdminObrazacUnosaKorisnika />
        </div>
      </div>
    </div>
  )
}

export default StranicaAdmin;