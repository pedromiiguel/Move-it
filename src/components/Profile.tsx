import Styles from '../styles/components/Profile.module.css';

export default function Profile() {
  return (
    <div className={Styles.profileContainer}>
      <img src="https://github.com/pedromiiguel.png" alt="" />
      <div>
        <strong>Pedro Miguel</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
