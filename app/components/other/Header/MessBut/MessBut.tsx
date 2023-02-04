import React, { FC } from "react";
import styles from "./MessBut.module.scss";

const MessBut: FC = () => {
  return (
    <div className={styles.MessBut}>
      <a href="viber://chat?number=%2B380679241202" className={styles.viber}>&nbsp;</a>
      <a href="tg://resolve?domain=@vladislow93" className={styles.telegram}>&nbsp;</a>
      <a href="https://wa.me/380679241202?text=Добрый%20день%20я%20по%20вопросу%20зубных%20имплантов" className={styles.whatsapp}>&nbsp;</a>
    </div>
  );
};

export default MessBut;