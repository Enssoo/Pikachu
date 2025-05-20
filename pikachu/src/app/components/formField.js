// components/Field.js
import styles from "./styles/formField.module.css";

export default function Field({ label, name, placeholder, type }) {
  return (
    <>
      <article className={styles.article}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <input
          className={styles.input}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required
        />
      </article>
    </>
  );
}
