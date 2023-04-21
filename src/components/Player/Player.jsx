import { useEffect, useState } from "react";
import useStore from "../../hooks/use-store";
import styles from "./Player.module.css";

const AudioContext = window.AudioContext || window.webkitAudioContext; // Obtem o AudioContext compatível com o navegador
const audioContext = new AudioContext();

const envelope = audioContext.createGain();
envelope.connect(audioContext.destination);

const Player = () => {
  const [beatsState, dispatch] = useStore();
  const [isPlaying, setIsPlaying] = useState(false);

  const playClickHandler = () => {
    setIsPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    let timeoutId = null;
    let beat = 1;

    const play = () => {
      envelope.gain.cancelScheduledValues(0);
      const level = beatsState.items.find(b => b.id === beat).level;
      
      const oscillator = audioContext.createOscillator();
      oscillator.type = 'square';
      oscillator.frequency.value = (level > 2) ? 1000 : (level > 1 ? 800 : 600);
      oscillator.connect(envelope);
      
      envelope.gain.value = 0;
      const time = audioContext.currentTime;
      envelope.gain.linearRampToValueAtTime(1, time + 0.01);
      envelope.gain.setValueAtTime(1, time + 0.04);
      envelope.gain.linearRampToValueAtTime(0, time + 0.07);
      
      oscillator.start();
      oscillator.stop(time + 0.1);

      dispatch('SET_BEAT', beat);
      beat = beat >= beatsState.items.length ? 1 : beat + 1;

      timeoutId = setTimeout(play, 60000 / beatsState.tempo);
    };

    if (isPlaying) {
      play();
    } else {
      dispatch('SET_BEAT', 0);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
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
