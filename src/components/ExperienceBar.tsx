import Styles from '../styles/components/ExperienceBar.module.css';

export default function ExperienceBar() {
  return (
    <header className={Styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{width: '50%' }}></div>
        <span className={Styles.currentExperience} style={{left: '50%'}}>300xp</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}