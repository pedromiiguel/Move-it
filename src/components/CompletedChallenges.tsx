import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import Styles from '../styles/components/CompletedChallenges.module.css';


export default function CompletedChallenges() {
  const { challengedCompleted } = useContext(ChallengesContext)


  return (
    <div className={Styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{ challengedCompleted }</span>
    </div>
  )
}