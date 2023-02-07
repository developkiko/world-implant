import React, { FC } from "react";
import styles from "./MessBut.module.scss";

const MessBut: FC = () => {
  return (
    <div className={styles.MessBut}>
      <a href="viber://chat?number=%2B380683656767" className={styles.viber}>&nbsp;</a>
      <a href="tg://resolve?domain=@world_implant" className={styles.telegram}>&nbsp;</a>
    </div>
  );
};

export default MessBut;