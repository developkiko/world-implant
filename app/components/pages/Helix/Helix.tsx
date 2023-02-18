import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/components/pages/Categories.module.scss";
import helix from "@/components/pages/Helix/helix-implant.png";

import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/other/Icons/Arrow";

const Helix: FC = () => {
  return (
    <article className={styles.implantArticle}>
      <div><Image src={helix} alt="Импланты Helix"/></div>
      <div>
        <h1>Имплантационная система HELIX</h1>
        <div className={styles.info}>
          <p>Консультация <span>Бесплатно</span></p>
          <p><div>Удаление зуба<span className={styles.adding}>(если нужно)</span></div> <span>650 грн.</span></p>
          <p><div>Имплант <span className={styles.adding}>+ установка</span></div> <span>5 500 грн.</span></p>
          <p><div>Формирователь десны <span className={styles.adding}>+ установка</span></div> <span>1 000 грн.</span></p>
          <p><div>Абатмент <span className={styles.adding}>+ установка</span></div> <span>2 500 грн.</span></p>
          <p><div>Циркониевая коронка <span className={styles.adding}>+ установка</span></div> <span>3 500 грн.</span></p>
          <p>Итого <span>12 500 грн.</span></p>
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

export default Helix;