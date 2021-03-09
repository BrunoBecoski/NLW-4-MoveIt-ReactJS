import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/components/Login.module.css';

export function Login() {

  const { openLoginModal, handleInputName, userName } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (userName) {
      openLoginModal()
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.content}>

        <img src="/icons/simbolo.svg" alt="Move It Símbolo" />

        <main className={styles.main}>

          <img src="/icons/logo-full.svg" alt="Move It Logo" />

          <h1>Bem-vindo</h1>

          <p>Crie sua conta agora mesmo</p>

          <form className={styles.form}>

            <label htmlFor="name">

              <input
                id="name"
                placeholder="Digite seu nome"
                onChange={event => (handleInputName(event.target.value))}
              />

              <button type="submit" onClick={handleSubmit}>

                <img src="/icons/arrow-right.svg" />

              </button>

            </label>

          </form>

          <button className={styles.github}>

            <img src="/icons/github.svg" alt="GitHub" />

            <p>Use seu perfil do Github para começar</p>

          </button>

        </main>

      </div>

    </div>
  );
}