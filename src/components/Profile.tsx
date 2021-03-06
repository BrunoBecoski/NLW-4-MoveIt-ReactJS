import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { UserContext } from '../contexts/UserContext';

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { userName, userAvatar } = useContext(UserContext);

  return (
    <div className={styles.profileContainer}>
      <img src={userAvatar} alt={userName} />
      <div>
        <strong>{userName}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}