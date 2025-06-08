import styles from "./UVCurrent.module.scss";

const UVCurrent = ({ value }) => {
  let label = 'Low', color = 'green';
  if (value > 6) { label = 'High'; color = 'red'; }
  else if (value > 3) { label = 'Moderate'; color = 'orange'; }

  return (
    <div>
      <p className={styles.currentUv} data-testid="p-tag">Current UV Index: <strong data-testid="strong-tag" style={{ color }}>{value} ({label})</strong></p>
    </div>
  );
}

export default UVCurrent;