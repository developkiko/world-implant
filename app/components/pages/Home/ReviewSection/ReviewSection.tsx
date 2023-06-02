import React, {FC} from "react";
import Image from "next/image";

import styles from "./ReviewSection.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Autoplay} from "swiper";
import {motion} from "framer-motion";

const ReviewSection: FC = () => {
  return (
    <motion.section
      initial={{translateX: "200px", opacity: 0}}
      whileInView={{translateX: "0px", opacity: 1}}
      viewport={{once: true}}
      className={styles.section}
      id="review"
    >
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
            <Image src={one} alt="Устойчивость" />
            <h4>Устойчивость</h4>
            <p>Надежная поддержка для Вашей зубной коронки</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={two} alt="Естественность" />
            <h4>Естественность</h4>
            <p>Словно Ваши зубы всегда были на месте</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={three} alt="Комфорт" />
            <h4>Комфорт</h4>
            <p>Высокий уровень комфорта во время еды и речи</p>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <Image src={four} alt="Долговечность" />
            <h4>Долговечность</h4>
            <p>Долговечный природный вид и функциональность</p>
          </article>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};

export default ReviewSection;