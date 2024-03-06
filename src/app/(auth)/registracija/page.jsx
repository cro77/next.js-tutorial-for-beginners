import styles from './registracija.module.css';
import ObrazacRegistracije from '@/components/obrazac-registracije/obrazacRegistracije';

const StranicaRegistracija = () => {
  return (
    <div className={styles.spremnik}>
      <div className={styles.omotac}>
        <ObrazacRegistracije />
      </div>
    </div>
  )
}

export default StranicaRegistracija;