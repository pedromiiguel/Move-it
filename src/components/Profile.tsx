import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import Styles from '../styles/components/Profile.module.css';

export default function Profile() {
  
  const { level } = useContext(ChallengesContext);

  
  return (
    <div className={Styles.profileContainer}>
      <img src="https://github.com/pedromiiguel.png" alt="" />
      <div>
        <strong>Pedro Miguel</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level { level }
        </p>
      </div>
    </div>
  );
}
