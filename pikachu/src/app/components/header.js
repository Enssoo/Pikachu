import Image from 'next/image';
import Link from 'next/link';
import styles from "./styles/header.module.css";

export default function Header({ atualId, abas }) {
    return (
      <header className={styles.header}>
        <Image src="/assets/logo.png" alt="Logo" width={70} height={70} className={styles.img} />
        <nav className={styles.nav}>

          <section className={styles.section}> 
            {abas.map((aba) => (
              aba.link ? (
                <Link key={aba.id} href={aba.link} className={aba.id === atualId ? styles.aVisited : styles.a}> {aba.nome} </Link>
              ) : (
                <span key={aba.id} className={styles.a}> {aba.nome} </span>
              )))}
          </section>
          
          <Link href="/profile" target='_blank'>
            <button className={styles.button}>PERFIL</button>
          </Link>
        </nav>
      </header>
    );
}