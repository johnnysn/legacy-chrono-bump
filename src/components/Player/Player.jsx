import { useEffect, useState } from "react";
import useStore from "../../hooks/use-store";
import { audioContext } from "../../store/beats-audio";
import styles from "./Player.module.css";
import Timer from "../../lib/timer";

const Player = () => {
  const [beatsState, dispatch] = useStore();
  const [isPlaying, setIsPlaying] = useState(false);

  const playClickHandler = (event) => {
    setIsPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    let timer = null;
    let beat = 1;

    const play = () => {
      const level = beatsState.items.find(b => b.id === beat).level;
      
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

      dispatch('SET_BEAT', beat);
      beat = beat >= beatsState.items.length ? 1 : beat + 1;
    };

    if (isPlaying) {
      timer = new Timer(play, 60000 / beatsState.tempo, {immediate: true});
      timer.start();
    } else {
      dispatch('SET_BEAT', 0);
    }

    return () => {
      if (timer) timer.stop();
    };
  }, [isPlaying, beatsState.tempo, beatsState.items]);

  return (
    <div className={styles.player}>
      <button type="button" onClick={playClickHandler}>
        <img src="play-pause-button-96.png" width="90px" height="90px" />
      </button>
    </div>
  );
};

export default Player;
