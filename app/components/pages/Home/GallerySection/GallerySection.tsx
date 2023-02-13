import React, { FC } from "react";
import styles from "./GallerySection.module.scss";

import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/other/Icons/Arrow";

import Link from "next/link";
import Heading from "@/components/ui/Heading/Heading";

const GallerySection: FC = () => {
  return (
    <section className={styles.GalleryMain}>
      <h3>Фото-галерея <span>World-Implant</span></h3>
      <Link href="/gallery">
        <Button primary>
          Смотреть фото-галерею <Arrow />
        </Button>
      </Link>
    </section>
  );
}

export default GallerySection;