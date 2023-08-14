import { useState, useEffect } from 'react';
import useStore from '../../hooks/use-store';
import styles from './Player.module.css';
import synthBeat from '../../beats/synth-beat';
import recordedBeat from '../../beats/recorded-beat';

const Player = () => {
  const [beatsState, dispatch] = useStore();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSynth, setIsSynth] = useState(false);

  const playClickHandler = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const synthChangeHandler = (event) => {
    setIsSynth(event.target.checked);
  };

  useEffect(() => {
    let timeoutId = null;
    let beat = 1;

    const play = () => {
      const level = beatsState.items.find((b) => b.id === beat).level;

      if (isSynth) synthBeat(level);
      else recordedBeat(level);

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
  }, [isPlaying, isSynth, beatsState.tempo, beatsState.items]);

  return (
    <div className={styles.player}>
      <button type="button" onClick={playClickHandler}>
        <img src="play-pause-button-96.png" width="90px" height="90px" />
      </button>
      <div className={styles.player__form}>
        <input type="checkbox" name="synth" id="chkSynth" onChange={synthChangeHandler} />
        <label htmlFor="chkSynth">Use synth beats</label>
      </div>
    </div>
  );
};

export default Player;
