import React, { FC } from "react";

import { motion } from "framer-motion";

import styles from "./ContactsSection.module.scss";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/other/Icons/Arrow";
import Phone from "@/components/other/Icons/Phone";
import Mail from "@/components/other/Icons/Mail";
import Geo from "@/components/other/Icons/Geo";

const ContactsSection: FC = () => {
  return (
    <motion.section
      initial={{ translateX: "200px", opacity: 0 }}
      whileInView={{ translateX: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      <div className={styles.form}>
        <div>
          <h4 className={styles.heading}>Остались вопросы?</h4>
          <p>
            Свяжитесь с нами, отправив ваше имя и номер телефона и в ближайшее
            время менеджер свяжется с вами и ответит на все ваши вопросы
          </p>
        </div>
        <form>
          <div>
            <Input title="Имя" name="name" placeholder="Введите ваше имя" />
            <Input
              title="Номер телефона"
              name="tel"
              type="tel"
              placeholder="Введите номер вашего телефона"
            />
          </div>
          <Button primary>
            Записаться <Arrow />
          </Button>
        </form>
      </div>
      <div className={styles.info}>
        <h5>Контактные данные</h5>
        <ul>
          <li>
            <span>
              <Phone /> <h6>Позвони сейчас</h6>
            </span>
            <span>
              <a href="tel:+380683656767">+38 (068) 365-67-67</a>
            </span>
            <span>
              <a href="tel:+380679241202">+38 (067) 924-12-02</a>
            </span>
          </li>
          <li>
            <span>
              <Mail /> <h6>Email</h6>
            </span>
            <span>
              <a href="mailto:support@world-implant.com">support@world-implant.com</a>
            </span>
            <span>
              <a href="mailto:info@world-implant.com">info@world-implant.com</a>
            </span>
          </li>
          <li>
            <span>
              <Geo /> <h6>Местоположение</h6>
            </span>
            <span>
              <a
                href="https://yandex.ru/maps/-/CCUvbUTgPD"
                rel="noreferrer"
                target="_blank"
              >
                754071, Московская область, город Сергиев Посад, улица 40 лет
                Октября, 5А
              </a>
            </span>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default ContactsSection;
