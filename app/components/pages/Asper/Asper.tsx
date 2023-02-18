import React, {FC} from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/components/pages/Categories.module.scss";
import asper from "@/components/pages/Asper/asper-implant.png";

import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/other/Icons/Arrow";

const Asper: FC = () => {
  return (
    <article className={styles.implantArticle}>
      <div><Image src={asper} alt="Импланты Asper"/></div>
      <div>
        <h1>Имплантационная система ASPER</h1>
        <div className={styles.info}>
          <p>Консультация <span>Бесплатно</span></p>
          <p><div>Удаление зуба<span className={styles.adding}>(если нужно)</span></div> <span>650 грн.</span></p>
          <p><div>Имплант<span className={styles.adding}>+ установка</span></div> <span>6 500 грн.</span></p>
          <p><div>Формирователь десны<span className={styles.adding}>+ установка</span></div> <span>1 000 грн.</span></p>
          <p><div>Абатмент<span className={styles.adding}>+ установка</span></div> <span>2 700 грн.</span></p>
          <p><div>Циркониевая коронка<span className={styles.adding}>+ установка</span></div> <span>3 500 грн.</span></p>
          <p>Итого <span>13 700 грн.</span></p>
        </div>
        <Link href="/#form" scroll={true}>
          <Button primary>
            Записаться <Arrow/>
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default Asper;