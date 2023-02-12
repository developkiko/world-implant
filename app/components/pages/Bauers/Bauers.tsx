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
          Bauer's Implants представляет витаминно-минеральный комплекс, который сокращает период интергации имплантата в костном матриксе, а также способствует поддержанию организма в постимплантацийний период.
          Благодаря специальному составу, данный комплекс обеспечивает быструю остеоинтеграцию и восстановления костной ткани после имплантации. Состав диетической добавки представляет собой комплекс минералов и витаминов максимально близкий по составу к костной ткани человека.
          Иммуно-восстановительной комплекс от Bauer's Implants - это последовательный трехэтапный курс для пациентов перед имплантацией или другим хирургическим вмешательством.
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