import React, { FC } from "react";

import styles from "./PrimarySection.module.scss";
import Button from "@/components/ui/Button/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

import Arrow from "@/components/other/Icons/Arrow";

import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper";

import car from "/public/images/car.png";
import chart from "/public/images/chart.png";
import fleet from "/public/images/fleet.png";
import instructor from "/public/images/instructor.png";
import discount from "/public/images/discount.png";

const PrimarySection: FC = () => {
  return (
    <motion.section
      initial={{ translateY: "200px", opacity: 0 }}
      whileInView={{ translateY: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      <article className={styles.majorArticle}>
        <span>Работает программа World-Implant Ukraine</span>
        <h1>Установка зубных имплантов. Одноэтапные и двухэтапные. Циркониевые зубные коронки. Стоматология, диагностика и лечение.</h1>
        <p>
          Мы предлагаем высококачественные зубные импланты и профессиональную установку в Днепре. Обратитесь к нам сейчас и восстановите улыбку навсегда.
        </p>
        <Link href="/#form" scroll={true}>
          <Button primary>
            Записаться <Arrow />
          </Button>
        </Link>
        <Image src={car} alt="Dental implant" />
      </article>
      <div className={styles.items}>
        <article>
          <Image src={chart} alt="Устойчивость" />
          <h4>Устойчивость</h4>
          <p>Надежная поддержка для Вашей зубной коронки</p>
        </article>
        <article>
          <Image src={fleet} alt="Естественность" />
          <h4>Естественность</h4>
          <p>Словно Ваши зубы всегда были на месте</p>
        </article>
        <article>
          <Image src={instructor} alt="Комфорт" />
          <h4>Комфорт</h4>
          <p>Высокий уровень комфорта во время еды и речи</p>
        </article>
        <article>
          <Image src={discount} alt="Долговечность" />
          <h4>Долговечность</h4>
          <p>Долговечный природный вид и функциональность</p>
        </article>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={chart} alt="Устойчивость" />
            <h4>Устойчивость</h4>
            <p>Надежная поддержка для Вашей зубной коронки</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={fleet} alt="Естественность" />
            <h4>Естественность</h4>
            <p>Словно Ваши зубы всегда были на месте</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={instructor} alt="Комфорт" />
            <h4>Комфорт</h4>
            <p>Высокий уровень комфорта во время еды и речи</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={discount} alt="Долговечность" />
            <h4>Долговечность</h4>
            <p>Долговечный природный вид и функциональность</p>
          </article>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};

export default PrimarySection;
