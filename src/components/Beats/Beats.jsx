import useStore from "../../hooks/use-store";
import Beat from "./Beat";
import styles from "./Beats.module.css";

const Beats = () => {
  const beatsState = useStore()[0];

  const items = beatsState.items.map((i) => (
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
