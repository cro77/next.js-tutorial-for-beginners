import styles from './podnozje.module.css';

const Podnozje = () => {
  return (
    <div className={styles.spremnik}>
      <div className={styles.logo}>Web programiranje</div>
      <div className={styles.tekst}>
        Agencija za kreativne misli © Sva prava pridržana
      </div>
    </div>
  )
}

export default Podnozje;