import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/components/pages/Categories.module.scss";
import unident from "@/components/pages/Unident/unident-implant.png";

import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/other/Icons/Arrow";

const Unident: FC = () => {
  return (
    <article className={styles.implantArticle}>
      <div><Image src={unident} alt="Импланты Unident"/></div>
      <div>
        <h1>Имплантационная система UNIDENT</h1>
        <div className={styles.info}>
          <p>Консультация <span>Бесплатно</span></p>
          <p><div>Удаление зуба<span className={styles.adding}>(если нужно)</span></div> <span>600 грн.</span></p>
          <p><div>Имплант<span className={styles.adding}>+ установка</span></div> <span>7 000 грн.</span></p>
          <p><div>Формирователь десны<span className={styles.adding}>+ установка</span></div> <span>1 000 грн.</span></p>
          <p><div>Абатмент<span className={styles.adding}>+ установка</span></div> <span>2 800 грн.</span></p>
          <p><div>Циркониевая коронка<span className={styles.adding}>+ установка</span></div> <span>3 500 грн.</span></p>
          <p>Установка под ключ <span>14 300 грн.</span></p>
        </div>
        <Link href="/#form" scroll={true}>
          <Button primary>
            Заказать консультацию <Arrow/>
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default Unident;