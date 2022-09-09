import React from 'react';
import styles from "./Toggle.module.css";

const Toggle = ({isToggle, onToggle}) => {
  return (
    <label className={styles.ToggleContainer}>
      <input type="checkbox" defaultChecked={isToggle} onChange={onToggle} />
      <span className={styles.Slider}/>
    </label>
  )
}

export default Toggle;