import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { UserContext } from '../contexts/UserContext';

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { profileName, profileImage } = useContext(UserContext);

  return (
    <div className={styles.profileContainer}>
      <img src={profileImage} alt="Bruno Becoski" />
      <div>
        <strong>{profileName}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}