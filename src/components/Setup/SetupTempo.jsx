import { useContext, useState } from "react";
import BeatsContext from "../../store/beats-context";
import styles from "./SetupTempo.module.css";

const SetupTempo = () => {
  const ctxBeats = useContext(BeatsContext);

  const changeHandler = (event) => {
    ctxBeats.setTempo(event.target.value);
  };

  const incHandler = () => {
    ctxBeats.setTempo(ctxBeats.tempo + 1);
  };

  const decHandler = () => {
    ctxBeats.setTempo(ctxBeats.tempo - 1);
  };

  return (
    <div className={styles["setup-tempo"]}>
      <div className={styles["setup-tempo__value"]}>
        <div className={styles["setup-tempo__value__btn"]} onClick={decHandler}>
          {" "}
          -{" "}
        </div>
        <h2>{ctxBeats.tempo}</h2>
        <div className={styles["setup-tempo__value__btn"]} onClick={incHandler}>
          {" "}
          +{" "}
        </div>
      </div>
      <form>
        <input
          type="range"
          name="rgTempo"
          id="rgTempo"
          min={40}
          max={200}
          value={ctxBeats.tempo || 100}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default SetupTempo;
