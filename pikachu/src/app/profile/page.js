import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/cards";
import styles from "./profile.module.css";

export const abas = [
  { id: 1, nome: "INÍCIO", link: "/" },
  { id: 2, nome: "SIMULADOS", link: null },
  { id: 3, nome: "SOBRE NÓS", link: "/aboutUs" },
];

export default function AboutUs() {
  return (
    <main>
      <Header atualId={0} abas={abas} />

      <section className={styles.container}>
        
        <Image alt="imagem de banner" src="/assets/banner.png" className={styles.banner} width={1000} height={90}/>
          <article className={styles.infoContainter}>
                <section className={styles.info}>
                    <Image alt="foto de perfil" src="/assets/profile.png" width={100} height={100} className={styles.profile}/>
                    <section className={styles.textInfo}>
                        <p className={styles.user}>User Name</p>
                        <p className={styles.email}>username@email.com</p>
                    </section>
                </section>
                <button className={styles.edit}>Editar</button>
          </article>
          
          <article className={styles.university}>
            <p>Unidade escolhida: Universidade Fictícia</p>
            <hr className={styles.line}/>
            <p>Curso escolhido: Curso Fictício</p>
          </article>
          
          <article className={styles.options}>
            <article className={styles.text}>
              <h1 className={styles.h1}> SUAS MÉTRICAS </h1>
              <p className={styles.textP}> Análise feita de forma totalmente personalizada com pontos de melhoria especificados. </p>
            </article>

            <section className={styles.buttons}> 
              <button className={styles.button}>Questões Certas</button>
              <button className={styles.button}>Pontos de Melhoria</button>
              <button className={styles.button}>Análise de Desempenho</button>
            </section>
          </article>
      </section>

      <article className={styles.cardText}>
            <h2 className={styles.h2}>Seus Assuntos Favoritos</h2>
            <section className={styles.section}>
                <Card img="/assets/portugues.png" imagem="Literatura" label="PORTUGUÊS" />
                <Card img="/assets/literatura.png" imagem="Literatura" label="LITERATURA" />
                <Card img="/assets/historiaa.png" imagem="Literatura" label="HISTÓRIA" />
                <Card img="/assets/geografiaa.png" imagem="Literatura" label="GEOGRAFIA" />
            </section>
      </article>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </main>
  );
}
