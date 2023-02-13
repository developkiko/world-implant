import React, { FC } from "react";
import styles from "./GallerySection.module.scss";

import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/other/Icons/Arrow";

import Link from "next/link";
import Heading from "@/components/ui/Heading/Heading";

const GallerySection: FC = () => {
  return (
    <>
    <Heading>Наша фото-галерея</Heading>
    <section className={styles.GalleryMain}>
      <h3>Вы можете посмотреть примеры продукции и работы специалистов программы <span>World-Implant Ukraine</span></h3>
      <Link href="/gallery">
        <Button primary>
          Смотреть галерею <Arrow />
        </Button>
      </Link>
    </section>
    </>
  );
}

export default GallerySection;