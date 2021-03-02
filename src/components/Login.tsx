import styles from '../styles/components/Login.module.css'

export function Login() {

  return (

    <main className={styles.loginContainer}>
      <img src="/icons/simbolo.svg" alt="Move It Símbolo" />

      <div className={styles.loginForm}>
        <img src="/icons/logo.svg" alt="Move It Logo" />
        <h1>Bem-vindo</h1>
        <div className={styles.github}>
          <img src="/icons/github.svg" alt="GitHub" />
          <p>Faça login com seu Github para começar</p>
        </div>
        <form>
          <label htmlFor="name">
            <input id="name" placeholder="Digite seu nome" />
            <button type="submit">
              <img src="/icons/arrow-right.svg" />
            </button>
          </label>
        </form>
      </div>
    </main>
  );
}