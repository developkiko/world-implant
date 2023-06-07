import React, {FC} from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/components/pages/Categories.module.scss";
import vitaplant from "@/components/pages/Vitaplant/vitaplant-implant.png";

import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/other/Icons/Arrow";

const Vitaplant: FC = () => {
  return (
    <article className={styles.implantArticle}>
      <div><Image src={vitaplant} alt="Импланты Vitaplant"/></div>
      <div>
        <h1>Имплантационная система Vitaplant</h1>
        <div className={styles.info}>
          <p>Консультация <span>Бесплатно</span></p>
          <p><div>Удаление зуба<span className={styles.adding}>(если нужно)</span></div> <span>---</span></p>
          <p><div>Имплант<span className={styles.adding}>+ установка</span></div> <span>6 000 грн.</span></p>
          <p><div>Циркониевая коронка<span className={styles.adding}>+ установка</span></div> <span>6 500 грн.</span></p>
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

export default Vitaplant;
