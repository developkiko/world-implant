import React, { FC } from "react";
import { motion } from "framer-motion";

import styles from "./FormSection.module.scss";
import Heading from "@/components/ui/Heading/Heading";
import Input from "@/components/ui/Input/Input";
import Radio from "@/components/ui/Radio/Radio";
import LongArrow from "@/components/other/Icons/LongArrow";

const FormSection: FC = () => {
  return (
    <motion.section
      initial={{ translateX: "-200px", opacity: 0 }}
      whileInView={{ translateX: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
      id="form"
    >
      <Heading>Заявка для консультации по покупке и установке зубных имплантов</Heading>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <Input
            required
            title="Имя"
            placeholder="Введите ваше имя"
            dark
            name="name"
          />
          <Input
            required
            title="Возраст"
            type="number"
            placeholder="Введите кол-во полных лет"
            min="18"
            max="100"
            name="age"
            dark
          />
          <Input
            required
            title="Номер телефона"
            type="tel"
            pattern="(\+?\d{2})?\d{10}"
            placeholder="Минимум 10 цифр, можно без +380"
            dark
            name="tel"
          />
          <Input
            title="E-mail"
            type="email"
            placeholder="Не обязательно"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            dark
            name="email"
          />
        </div>
        <div className={styles.buttons}>
          <div>
            <h5>Суть вашего вопроса</h5>
            <div className={styles.category}>
              <Radio
                required
                title="Консультация"
                name="category"
                defaultValue="Consult"
                dark
              />
              <Radio
                required
                title="Покупка имплантов"
                name="category"
                defaultValue="Buy implants"
                dark
              />
              <Radio
                required
                title="Покупка и установка имплантов"
                name="category"
                defaultValue="Buy and install implants"
                dark
              />
              <Radio
                required
                title="Только установка имплантов"
                name="category"
                defaultValue="Install implants only"
                dark
              />
            </div>
          </div>
          <div>
            <h5>Когда Вам позвонить?</h5>
            <div className={styles.group}>
              <Radio
                required
                title="до 12 дня"
                name="group"
                defaultValue="before 12"
                dark
              />
              <Radio
                required
                title="после 12 дня"
                name="group"
                defaultValue="after 12"
                dark
              />
              <Radio
                required
                title="когда угодно"
                name="group"
                defaultValue="any"
                dark
              />
            </div>
          </div>
        </div>
        <button className={styles.submit}>
          Записаться <LongArrow />
        </button>
      </form>
    </motion.section>
  );
};

export default FormSection;
