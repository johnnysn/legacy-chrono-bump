import { useContext, useEffect, useState } from "react";
import BeatsContext from "../../store/beats-context";
import styles from "./Player.module.css";

const Player = () => {
  const ctx = useContext(BeatsContext);

  const [isPlaying, setIsPlaying] = useState(false);

  const playClickHandler = event => {
    setIsPlaying( prevState => !prevState );
  };

  useEffect(() => {
    let interval = null;
    let beat = 1;
    if (isPlaying) {
      interval = setInterval(() => {
        console.log(beat);
        beat = (beat >= ctx.items.length) ? 1 : beat + 1;
      }, (60000 / ctx.tempo));
    }
  
    return () => {
      console.log('CLEANUP');
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, ctx.tempo, ctx.items]);

  return (
    <div className={styles.player}>
      <button type="button" onClick={playClickHandler}>
        <img src="/play-pause-button-96.png" width="90px" height="90px" />
      </button>
    </div>
  );
};

export default Player;
