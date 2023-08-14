import styles from './IncDec.module.css';

const IncDec = ({ value, label, onInc, onDec }) => {
  return (
    <div className={styles['inc-dec']}>
      <div className={styles['inc-dec__label']}>{label}</div>
      <div className={styles['inc-dec-box']}>
        <div className={styles['inc-dec__btn']} onClick={onDec}>
          {' '}
          -{' '}
        </div>
        <div className={styles['inc-dec__value']}>{value}</div>
        <div className={styles['inc-dec__btn']} onClick={onInc}>
          {' '}
          +{' '}
        </div>
      </div>
    </div>
  );
};

export default IncDec;
