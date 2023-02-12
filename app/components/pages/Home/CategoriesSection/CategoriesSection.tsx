import React, {FC} from "react";
import Link from "next/link";
import Image from "next/image";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import {motion} from "framer-motion";
import styles from "./CategoriesSection.module.scss";
import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/other/Icons/Arrow";
import Heading from "@/components/ui/Heading/Heading";

import categoryCarB from "/public/images/category_car_b.jpg";
import categoryCarC from "/public/images/category_car_c.jpg";
import categoryCarCE from "/public/images/category_car_ce.jpg";
import categoryCarD from "/public/images/category_car_d.jpg";

import price from "/public/images/price.png";
import practice from "/public/images/practice.png";

const CategoriesSection: FC = () => {
  return (
    <motion.section
      initial={{translateX: "200px", opacity: 0}}
      whileInView={{translateX: "0px", opacity: 1}}
      viewport={{once: true}}
      className={styles.section}
      id="categories"
    >
      <Heading>Каталог цен на услуги и продукцию</Heading>
      <div className={styles.categories}>
        <article>
          <h3>
            Имплантационная система <span>HELIX</span>
          </h3>
          <div className={styles.img}>
            <Image src={categoryCarB} alt="Имплантационная система HELIX"/>
          </div>
          <ul>
            <li>
              <Image src={price} alt="Иконка цены"/>
              <span className={styles.heading}>от 7 000 грн/шт</span>
              <span>с учётом установки</span>
            </li>
            <li>
              <Image src={practice} alt="Иконка качества"/>
              <span className={styles.heading}>Немецкое</span>
              <span> качество</span>
            </li>
          </ul>
          <Link href="/helix">
            <Button primary>
              Смотреть каталог <Arrow/>
            </Button>
          </Link>
        </article>
        <article>
          <h3>
            Имплантационная система <span>ASPER</span>
          </h3>
          <div className={styles.img}>
            <Image src={categoryCarC} alt="Имплантационная система ASPER"/>
          </div>
          <ul>
            <li>
              <Image src={price} alt="Иконка цены"/>
              <span className={styles.heading}>от 7 500 грн/шт</span>
              <span>с учётом установки</span>
            </li>
            <li>
              <Image src={practice} alt="Иконка качества"/>
              <span className={styles.heading}>Корейское</span>
              <span> качество</span>
            </li>
          </ul>
          <Link href="/asper">
            <Button primary>
              Смотреть каталог <Arrow/>
            </Button>
          </Link>
        </article>
        <article>
          <h3>
            Имплантационная система <span>UNIDENT</span>
          </h3>
          <div className={styles.img}>
            <Image src={categoryCarCE} alt="Имплантационная система UNIDENT"/>
          </div>
          <ul>
            <li>
              <Image src={price} alt="Иконка цены"/>
              <span className={styles.heading}>от 6 500 грн/шт</span>
              <span>с учётом установки</span>
            </li>
            <li>
              <Image src={practice} alt="Иконка качества"/>
              <span className={styles.heading}>Швейцарское</span>
              <span> качество</span>
            </li>
          </ul>
          <Link href="/unident">
            <Button primary>
              Смотреть каталог <Arrow/>
            </Button>
          </Link>
        </article>
        <article>
          <h3>
            Витаминный комплекс <span>ТМ Bauer`s</span>
          </h3>
          <div className={styles.img}>
            <Image src={categoryCarD} alt="Витаминный комплекс ТМ Bauer`s"/>
          </div>
          <ul>
            <li>
              <Image src={price} alt="Иконка цены"/>
              <span className={styles.heading}>2 000 грн</span>
            </li>
          </ul>
          <Link href="/bauers">
            <Button primary>
              Смотреть каталог <Arrow/>
            </Button>
          </Link>
        </article>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <article>
            <h3>
              Имплантационная система <span>HELIX</span>
            </h3>
            <div className={styles.img}>
              <Image src={categoryCarB} alt="Имплантационная система HELIX"/>
            </div>
            <ul>
              <li>
                <Image src={price} alt="Иконка цены"/>
                <span className={styles.heading}>от 7 000 грн/шт</span>
                <span>с учётом установки</span>
              </li>
              <li>
                <Image src={practice} alt="Иконка качества"/>
                <span className={styles.heading}>Немецкое</span>
                <span> качество</span>
              </li>
            </ul>
            <Link href="/helix">
              <Button primary>
                Смотреть каталог <Arrow/>
              </Button>
            </Link>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <h3>
              Имплантационная система <span>ASPER</span>
            </h3>
            <div className={styles.img}>
              <Image src={categoryCarC} alt="Имплантационная система ASPER"/>
            </div>
            <ul>
              <li>
                <Image src={price} alt="Иконка цены"/>
                <span className={styles.heading}>от 7 500 грн/шт</span>
                <span>с учётом установки</span>
              </li>
              <li>
                <Image src={practice} alt="Иконка качества"/>
                <span className={styles.heading}>Корейское</span>
                <span> качество</span>
              </li>
            </ul>
            <Link href="/asper">
              <Button primary>
                Смотреть каталог <Arrow/>
              </Button>
            </Link>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <h3>
              Имплантационная система <span>UNIDENT</span>
            </h3>
            <div className={styles.img}>
              <Image src={categoryCarCE} alt="Имплантационная система UNIDENT"/>
            </div>
            <ul>
              <li>
                <Image src={price} alt="Иконка цены"/>
                <span className={styles.heading}>от 6 500 грн</span>
                <span>с учётом установки</span>
              </li>
              <li>
                <Image src={practice} alt="Иконка качества"/>
                <span className={styles.heading}>Швейцарское</span>
                <span> качество</span>
              </li>
            </ul>
            <Link href="/unident">
              <Button primary>
                Смотреть каталог <Arrow/>
              </Button>
            </Link>
          </article>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <article>
            <h3>
              Витаминный комплекс <span>ТМ Bauer`s</span>
            </h3>
            <div className={styles.img}>
              <Image src={categoryCarD} alt="Витаминный комплекс ТМ Bauer`s"/>
            </div>
            <ul>
              <li>
                <Image src={price} alt="Иконка цены"/>
                <span className={styles.heading}>2 000 грн</span>
              </li>
            </ul>
            <Link href="/bauers">
              <Button primary>
                Смотреть каталог <Arrow/>
              </Button>
            </Link>
          </article>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  );
};

export default CategoriesSection;
