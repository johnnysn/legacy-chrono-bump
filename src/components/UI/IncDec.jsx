import styles from "./IncDec.module.css";

const IncDec = ({value, onInc, onDec}) => {
  return (
    <div className={styles["inc-dec"]}>
      <div className={styles["inc-dec__btn"]} onClick={onDec}>
        {" "}
        -{" "}
      </div>
      <h2>{value}</h2>
      <div className={styles["inc-dec__btn"]} onClick={onInc}>
        {" "}
        +{" "}
      </div>
    </div>
  );
};

export default IncDec;
