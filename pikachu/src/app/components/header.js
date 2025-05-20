"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./styles/header.module.css";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header({ atualId, abas }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.header}>
      <Image src="/assets/logo.png" alt="Logo" width={70} height={70} className={styles.img} />

      <nav className={styles.nav}>
        <section className={styles.section}>
          {abas.map((aba) => (
            aba.link ? (
              <Link key={aba.id} href={aba.link} className={aba.id === atualId ? styles.aVisited : styles.a}>
                {aba.nome}
              </Link>
            ) : (
              <span key={aba.id} className={styles.a}>{aba.nome}</span>
            )
          ))}
        </section>
        <Link href="/profile" target="_blank">
          <button className={styles.button}>PERFIL</button>
        </Link>
      </nav>

      <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Abrir menu">
        {menuAberto ? <FaTimes /> : <FaBars />}
      </button>

      {menuAberto && (
        <nav className={styles.mobileMenu}>
          {abas.map((aba) => (
            aba.link && (
              <Link key={aba.id} href={aba.link} onClick={() => setMenuAberto(false)}>
                {aba.nome}
              </Link>
            )
          ))}
          <Link href="/profile" target="_blank" onClick={() => setMenuAberto(false)}>
            PERFIL
          </Link>
        </nav>
      )}
    </header>
  );
}
