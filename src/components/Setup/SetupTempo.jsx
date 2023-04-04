import { useContext, useState } from "react";
import BeatsContext from "../../store/beats-context";
import IncDec from "../UI/IncDec";
import styles from "./SetupTempo.module.css";

const SetupTempo = () => {
  const ctxBeats = useContext(BeatsContext);

  const changeHandler = (event) => {
    ctxBeats.setTempo(event.target.value);
  };

  const incHandler = () => {
    ctxBeats.setTempo(+ctxBeats.tempo + 1);
  };

  const decHandler = () => {
    ctxBeats.setTempo(+ctxBeats.tempo - 1);
  };

  return (
    <div className={styles["setup-tempo"]}>
      <IncDec value={ctxBeats.tempo} label={'BPM'} onInc={incHandler} onDec={decHandler} />
      <form>
        <input
          type="range"
          name="rgTempo"
          id="rgTempo"
          min={40}
          max={200}
          step={5}
          value={ctxBeats.tempo || 100}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default SetupTempo;
