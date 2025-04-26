import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import Card from "../components/cards";
import styles from "./aboutUs.module.css";


export const abas = [
   { id: 1, nome: "INÍCIO", link: "/" },
   { id: 2, nome: "SIMULADOS", link: null },
   { id: 3, nome: "SOBRE NÓS", link: "/aboutUs" }
];

export default function AboutUs() {
    return (
         <main>
            <header>
               <Header atualId={3} abas={abas} />
            </header>

            <article className={styles.article}>
               <Image src="/assets/sobre_nos.png" alt="Cadastro" className={styles.img} width={700} height={400}/>

               <section className={styles.text}>
                  <p className={styles.p}>
                     Somos uma iniciativa sem fins lucrativos voltada a estudantes periféricos e racializados 
                     que estão saindo do ensino público e sonham com o acesso à universidade.
                  </p>

                  <p className={styles.p}>   
                     Oferecemos apoio gratuito para o vestibular com conteúdos acessíveis, atualizados e construídos 
                     pensando em quem, muitas vezes, não teve as mesmas oportunidades ao longo da vida escolar. 
                     Valorizamos o potencial de cada pessoa e trabalhamos para que nenhum talento fique pelo caminho 
                     por falta de estrutura ou apoio.
                  </p>

                  <p className={styles.p}> 
                     Mais do que um site de estudos, somos uma rede de fortalecimento, pertencimento e transformação.
                  </p>
                  <a href="/signIn" target="_blank" className={styles.register}>Fazer cadastro</a>
               </section>
            </article>

            <article className={styles.cardText}>
               <h2 className={styles.h2}>Prévia dos Conteúdos</h2>
               <section className={styles.section}>
                  <Card img="/assets/biologia.png" imagem="Literatura" label="BIOLOGIA"/>
                  <Card img="/assets/sociologia.png" imagem="Literatura" label="SOCIOLOGIA"/>
                  <Card img="/assets/redacao.png" imagem="Literatura" label="REDAÇÃO"/>
                  <Card img="/assets/ingles.png" imagem="Literatura" label="INGLÊS"/>
               </section>
            </article>

            <footer>
               <Footer/>
            </footer>
         </main>
    );
}
