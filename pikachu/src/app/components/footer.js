import styles from "./styles/footer.module.css";

export default function Footer() {
    return (
      <>
        <footer className={styles.footer}>
            <hr className={styles.hr}/>
            <p className={styles.developers}>Ana | Dayô | Enzo </p>
            <a href="#" className={styles.a}>Instagram</a>
            <a href="https://github.com/Enssoo/Pikachu" target="_blank" className={styles.a}>Github</a>
            <a href="#" className={styles.a}>LinkedIn</a>
        </footer>
      </>
    );
  }