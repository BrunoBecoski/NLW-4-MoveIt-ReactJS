import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';
import styles from '../styles/components/LoginModal.module.css';

export function LoginModal() {
  const { closeLoginModal } = useContext(UserContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>

        <p>Essa é sua conta no github</p>

        <img src="https://github.com/brunobecoski.png" alt="Bruno Becoski" />
        <strong>Bruno Becoski</strong>
        <div className={styles.buttons}>
          <button className={styles.buttonYes}>
            Sim
          </button>
          <button className={styles.buttonNo}>
            Não
          </button>

        </div>
        <button type="button" className={styles.closeButton} onClick={closeLoginModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  )
}