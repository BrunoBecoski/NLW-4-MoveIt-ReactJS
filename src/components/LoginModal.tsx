import { useRouter } from 'next/router';
import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';
import styles from '../styles/components/LoginModal.module.css';

export function LoginModal() {
  const {
    userName,
    userAvatar,
    createAccount,
    closeLoginModal,
    handleInputAvatar,
  } = useContext(UserContext);

  const router = useRouter();

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>

        <button type="button" className={styles.buttonClose} onClick={closeLoginModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>

        <main className={styles.main}>
          <h1>Sua imagem de perfil</h1>
          <img src={userAvatar} alt="Imagem de perfil" />
          <strong>{userName}</strong>

          <form>
            <label>
              Url da sua imagem de perfil
              <input
                type="url"
                name=""
                id=""
                placeholder="URL da image"
                onChange={event => (handleInputAvatar(event.target.value))} />
            </label>
          </form>
        </main>

        <footer className={styles.footer}>
          <button className={styles.buttonNo} onClick={closeLoginModal}>
            Retornar
            </button>
          <button className={styles.buttonYes} onClick={() => router.push('/dashboard')}>
            Criar conta
            </button>
        </footer>

      </div>
    </div>
  )
}
