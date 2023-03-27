import { useContext } from 'react';
import BeatsContext from "../../store/beats-context";
import styles from './Beat.module.css';

const Beat = ({ id, level }) => {
  const beatsCtx = useContext(BeatsContext);

  const beat = beatsCtx.items.find(b => b.id === id);

  const clickHandler = event => {
    
    let level = beat.level;
    if (level >= 3) level = 1;
    else level++;

    beatsCtx.setLevel(id, level);
  };

  return (
    <div className={styles.beat} onClick={clickHandler}>
      Beat {id}, level {level}
    </div>
  );
};

export default Beat;
