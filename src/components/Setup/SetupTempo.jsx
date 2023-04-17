import IncDec from "../UI/IncDec";
import styles from "./SetupTempo.module.css";
import useStore from "../../hooks/use-store";

const SetupTempo = () => {
  const [beatsState, dispatch] = useStore();

  const changeHandler = (event) => {
    dispatch('SET_TEMPO', event.target.value);
  };

  const incHandler = () => {
    dispatch('SET_TEMPO', +beatsState.tempo + 1);
  };

  const decHandler = () => {
    dispatch('SET_TEMPO', +beatsState.tempo - 1);
  };

  return (
    <div className={styles["setup-tempo"]}>
      <IncDec value={beatsState.tempo} label={'BPM'} onInc={incHandler} onDec={decHandler} />
      <form>
        <input
          type="range"
          name="rgTempo"
          id="rgTempo"
          min={40}
          max={240}
          step={5}
          value={beatsState.tempo || 100}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default SetupTempo;
