import { useContext, useEffect, useState } from "react";
import { audioContext } from "../../store/beats-audio";
import BeatsContext from "../../store/beats-context";
import styles from "./Player.module.css";
import Timer from "../../lib/timer";

const Player = () => {
  const ctx = useContext(BeatsContext);

  const [isPlaying, setIsPlaying] = useState(false);

  const playClickHandler = (event) => {
    setIsPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    let timer = null;
    let beat = 1;

    const play = () => {
      const level = ctx.items.find(b => b.id === beat).level;
      
      const osc = audioContext.createOscillator();
      const envelope = audioContext.createGain();
          
      const time = audioContext.currentTime;
      osc.frequency.value = (level > 2) ? 1000 : (level > 1 ? 800 : 600);
      envelope.gain.value = 1;
      envelope.gain.exponentialRampToValueAtTime(1, time + 0.001);
      envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.015);

      osc.connect(envelope);
      envelope.connect(audioContext.destination);
      
      osc.start(time);
      osc.stop(time + 0.02);

      ctx.setBeat(beat);
      beat = beat >= ctx.items.length ? 1 : beat + 1;
    };

    if (isPlaying) {
      timer = new Timer(play, 60000 / ctx.tempo, {immediate: true});
      timer.start();
    } else {
      ctx.setBeat(0);
    }

    return () => {
      if (timer) timer.stop();
    };
  }, [isPlaying, ctx.tempo, ctx.items]);

  return (
    <div className={styles.player}>
      <button type="button" onClick={playClickHandler}>
        <img src="play-pause-button-96.png" width="90px" height="90px" />
      </button>
    </div>
  );
};

export default Player;
