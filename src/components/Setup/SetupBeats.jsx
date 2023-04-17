import IncDec from "../UI/IncDec";
import styles from "./SetupBeats.module.css";
import useStore from "../../hooks/use-store";

const SetupBeats = () => {
  const [beatsState, dispatch] = useStore();

  const incHandler = () => {
    dispatch('SET_COUNT', beatsState.items.length + 1);
  }

  const decHandler = () => {
    dispatch('SET_COUNT', beatsState.items.length - 1);
  }

  return <div className={styles["setup-beats"]}>
    <IncDec onInc={incHandler} onDec={decHandler} value={beatsState.items.length} label={'# of beats'} />
  </div>;
};

export default SetupBeats;
