import styles from './Player.module.css';

const Player = () => {
  return <div className={styles.player}>
    <button type='button'>Play</button>
    <button type='button'>Pause</button>
  </div>;
};

export default Player;