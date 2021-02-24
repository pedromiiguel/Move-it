import Styles from '../styles/components/CompletedChallenges.module.css';


export default function CompletedChallenges() {
  return (
    <div className={Styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>5</span>
    </div>
  )
}