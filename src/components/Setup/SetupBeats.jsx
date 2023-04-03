import { useContext } from "react";
import BeatsContext from "../../store/beats-context";
import IncDec from "../UI/IncDec";
import styles from "./SetupBeats.module.css";

const SetupBeats = () => {
  const ctx = useContext(BeatsContext);

  const incHandler = () => {
    ctx.setCount(ctx.items.length + 1);
  }

  const decHandler = () => {
    ctx.setCount(ctx.items.length - 1);
  }

  return <div className={styles["setup-beats"]}>
    <IncDec onInc={incHandler} onDec={decHandler} value={ctx.items.length} />
  </div>;
};

export default SetupBeats;
