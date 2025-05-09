import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/cards";
import styles from "./home.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


export const abas = [
  { id: 1, nome: "INÍCIO", link: "/" },
  { id: 2, nome: "SIMULADOS", link: null },
  { id: 3, nome: "SOBRE NÓS", link: "/aboutUs" },
];

export default function AboutUs() {
  return (
    <main>
      <Header atualId={1} abas={abas} />

      <article className={styles.search}>
        <button className={styles.category}>CATEGORIAS</button>
        <i className={`fa-solid fa-magnifying-glass ${styles.glass}`}></i>
        <input type="text" className={styles.input} />
      </article>

      <section className={styles.section}>
        <Card img="/assets/portugues.png" imagem="Português" label="PORTUGUÊS" />
        <Card img="/assets/literatura.png" imagem="Literatura" label="LITERATURA" />
        <Card img="/assets/historiaa.png" imagem="História" label="HISTÓRIA" />
        <Card img="/assets/geografiaa.png" imagem="Geografia" label="GEOGRAFIA" />
      </section>

      <section className={styles.section}>
        <Card img="/assets/filosofiaa.png" imagem="Filosofia" label="FILOSOFIA" />
        <Card img="/assets/matematicaa.png" imagem="Matemática" label="MATEMÁTICA" />
        <Card img="/assets/fisica.png" imagem="Física" label="FÍSICA" />
        <Card img="/assets/quimica.png" imagem="Química" label="QUÍMICA" />
      </section>

      <section className={styles.section}>
        <Card img="/assets/biologia.png" imagem="Biologia" label="BIOLOGIA" />
        <Card img="/assets/sociologia.png" imagem="Sociologia" label="SOCIOLOGIA" />
        <Card img="/assets/redacao.png" imagem="Redação" label="REDAÇÃO" />
        <Card img="/assets/ingles.png" imagem="Inglês" label="INGLÊS" />
      </section>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </main>
  );
}
