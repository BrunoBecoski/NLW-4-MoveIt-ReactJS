import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';
import styles from '../styles/components/LoginGithubModal.module.css';

export function LoginGithubModal() {
  const {
    userName,
    userAvatar,
    createAccount,
    closeLoginGithubModal,
    handleInputAvatar,
  } = useContext(UserContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>

        <button type="button" className={styles.buttonClose} onClick={closeLoginGithubModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>

        <main className={styles.main}>
          <h1>Seu perfil no Github?</h1>
          <img src={userAvatar || '/icons/logo.svg'} alt="Imagem de perfil" />
          <strong>Nome </strong>

          <div>
            <img src="./icons/github.svg" alt="GitHub"/>
          </div>
        
          <a href="#">#</a>
        </main>

        <footer className={styles.footer}>
          <button className={styles.buttonNo} onClick={closeLoginGithubModal}>
            Não
            </button>
          <button className={styles.buttonYes} onClick={createAccount}>
            Sim
            </button>
        </footer>

      </div>
    </div>
  )
}
