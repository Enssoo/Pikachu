import Image from 'next/image';
import styles from "./styles/cards.module.css";

export default function Card({img, imagem, label}) {
    return (
      <>
        <article className={styles.article}>
          <section className={styles.imgWrapper}>
            <Image src={img} alt={imagem} fill className={styles.img}/>
          </section>
          <p className={styles.label}>{label}</p>
        </article>
      </>
    );
  }