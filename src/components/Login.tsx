import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/components/Login.module.css';


interface UserData {
  avatar_url: string;
  name: string;
  html_url: string;
}

export function Login() {

  const { openLoginModal, handleInputName, userName } = useContext(UserContext);

  const [userData, setUserData] = useState<UserData>(null);

  async function handleSubmit(event) {
    event.preventDefault();

    // await fetch(`https://api.github.com/users/${userName}`)
    //   .then(response => response.json()
    //     .then(responseJson =>
    //       setUserData(responseJson)
    //     ));

    if (userName) {
      openLoginModal()

    }
  }

  return (

    <main className={styles.loginContainer}>

      <img src="/icons/simbolo.svg" alt="Move It Símbolo" />

      <div className={styles.loginForm}>
        <img src="/icons/logo-full.svg" alt="Move It Logo" />
        <h1>Bem-vindo</h1>
        <form>
          <label htmlFor="name">
            <input id="name" placeholder="Digite seu nome"
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
      </div>
    </main>
  );
}