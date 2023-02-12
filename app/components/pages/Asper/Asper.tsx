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
          <p>Удаление зуба (если нужно) <span>600 грн.</span></p>
          <p>Имплант + установка <span>7 000 грн.</span></p>
          <p>Формирователь десны <span>800 грн.</span></p>
          <p>Абатмент <span>2 000 грн.</span></p>
          <p>Металлокерамическая коронка <span>2 500 грн.</span></p>
        </div>
        <Link href="/#form" scroll={true}>
          <Button primary>
            Заказать установку импланта <Arrow/>
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default Asper;