import styles from "./Beat.module.css";
import useStore from "../../hooks/use-store";

const Beat = ({ id, level }) => {
  const [beatsState, dispatch] = useStore();

  const beat = beatsState.items.find((b) => b.id === id);

  const clickHandler = (event) => {
    let level = beat.level;
    if (level >= 3) level = 1;
    else level++;

    dispatch('SET_LEVEL', {id, level});
  };

  return (
    <div
      className={`
        ${styles.beat} ${beatsState.beat === id ? styles["beat--bumped"] : ""} 
        ${beatsState.items.length > 4 ? styles["beat--thin"] : ""} 
        ${beatsState.items.length > 6 ? styles["beat--thiner"] : ""}
      `}
      onClick={clickHandler}
    >
      <div
        className={`${styles["beat__bar"]} ${
          level >= 3 ? styles["beat__bar--active"] : ""
        }`}
      ></div>
      <div
        className={`${styles["beat__bar"]} ${
          level >= 2 ? styles["beat__bar--active"] : ""
        }`}
      ></div>
      <div
        className={`${styles["beat__bar"]} ${styles["beat__bar--active"]}`}
      ></div>
    </div>
  );
};

export default Beat;
