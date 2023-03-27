import { useContext } from "react";
import BeatsContext from "../../store/beats-context";
import Beat from "./Beat";
import styles from "./Beats.module.css";

const Beats = () => {
  const beatsCtx = useContext(BeatsContext);

  const items = beatsCtx.items.map((i) => (
    <li key={i.id}>
      <Beat id={i.id} level={i.level} />
    </li>
  ));

  return (
    <div className={styles.beats}>
      <ul>{items}</ul>
    </div>
  );
};

export default Beats;
