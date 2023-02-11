import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/components/pages/Categories.module.scss";
import bauers from "@/components/pages/Bauers/bauers-implant.jpg";

import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/other/Icons/Arrow";

const Bauers: FC = () => {
  return (
    <article className={styles.implantArticle}>
      <div><Image src={bauers} alt="Витаминный комплекс Bauers"/></div>
      <div>
        <h1>Витаминный комплекс BAUERS</h1>
        <div className={styles.info}>
          <p>Консультация <span>Бесплатно</span></p>
          <p>Удаление зуба <span>600 грн.</span></p>
          <p>Имплант + установка <span>7 000 грн.</span></p>
          <p>Формирователь десны <span>800 грн.</span></p>
          <p>Абатмент <span>2 000 грн.</span></p>
          <p>Металокерамическая коронка <span>2 500 грн.</span></p>
        </div>
        <Link href="/#form" scroll={true}>
          <Button primary>
            Заказать витаминный комплекс <Arrow/>
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default Bauers;