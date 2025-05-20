import Image from "next/image";
import styles from "./signIn.module.css";
import Field from "../components/formField";
import Card from "../components/cards";
 
export default function SignIN() {
  return (
      <main className={styles.main}>
        <article className={styles.imgWrapper}>
          <Image src="/assets/cadastro.png" alt="Cadastro" fill style={{ objectFit: "cover" }}/>
        </article>
        <article className={styles.right}>
          <h1 className={styles.h1}>Cadastre-se</h1>
          <form className={styles.form}>
            <Field label="Nome Completo" name="nome" placeholder="Nome Sobrenome" type="text"/>

            <Field label="E-mail" name="email" placeholder="username@email.com" type="email"/>

            <Field label="Curso Escolhido" name="curso" placeholder="Engenharia de Pesca" type="text"/>

            <Field label="Universidade Desejada" name="univerisdade" placeholder="Universidade" type="text"/>
 
            <section className={styles.buttons}>
              <button type="reset" className={styles.reset}> Cancelar </button>
              <button type="submit" className={styles.submit}> Enviar </button>
            </section>
          </form>
        </article>
      </main>
  );
}
