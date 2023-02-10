import React, { FC, useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import FormHandler from "@/components/other/FormHandler/FormHandler";

import styles from "./FormSection.module.scss";
import forms from "@/components/other/FormHandler/Form.module.scss";
import Heading from "@/components/ui/Heading/Heading";
import Input from "@/components/ui/Input/Input";
import Radio from "@/components/ui/Radio/Radio";
import LongArrow from "@/components/other/Icons/LongArrow";

const FormSection: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    tel: '',
    email: '',
    category: '',
    group: ''
  });
  const [isShowing, setShowing] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    const clearData = JSON.stringify(formData);
    console.log(clearData);
    let data: any;
    try {
      data = JSON.parse(clearData);
    } catch (error) {
      console.error(error);
    }

    const { name, age, tel, email, category, group } = data;
    const message = `Здравствуйте меня зовут ${name}, мне ${age} года. Я хотел бы провести ${category}, вот мои контакты: Телефон: ${tel} e-mail: ${email}, звоните ${group}`;
    const status = await FormHandler(message);
    console.log(status ? "все ок!" : "беда!");
    setShowing(status);
    let form = document.getElementsByTagName("form").item(0);
    if (form && status) form.style.display = "none";
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <motion.section
      initial={{ translateX: "-200px", opacity: 0 }}
      whileInView={{ translateX: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
      id="form"
    >
      <Heading>Заявка для консультации по покупке и установке зубных имплантов</Heading>
      <div className={forms.modal}>
        {isShowing ? <div>Ваше заявка успешно отправлена! Ожидайте, наш менеджер свяжеться с вами в ближайшее время.</div> : <span>Возникла проблема при отправке формы, возможно Вам стоит попробовать еще раз позже!</span>}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <Input
            required
            title="Имя"
            placeholder="Введите ваше имя"
            dark
            name="name"
            value={formData.name}
            event={handleInputChange}
          />
          <Input
            required
            title="Возраст"
            type="number"
            placeholder="Введите кол-во полных лет"
            min="18"
            max="100"
            name="age"
            value={formData.age}
            dark
            event={handleInputChange}
          />
          <Input
            required
            title="Номер телефона"
            type="tel"
            pattern="(\+?\d{2})?\d{10}"
            placeholder="Минимум 10 цифр, можно без +380"
            dark
            name="tel"
            value={formData.tel}
            event={handleInputChange}
          />
          <Input
            title="E-mail"
            type="email"
            placeholder="Не обязательно"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            dark
            name="email"
            value={formData.email}
            event={handleInputChange}
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
                defaultValue="Консультация"
                dark
                checked={formData.category === "Консультация"}
                event={handleInputChange}
              />
              <Radio
                required
                title="Покупка имплантов"
                name="category"
                defaultValue="Покупка имплантов"
                dark
                checked={formData.category === "Покупка имплантов"}
                event={handleInputChange}
              />
              <Radio
                required
                title="Покупка и установка имплантов"
                name="category"
                defaultValue="Покупка и установка имплантов"
                dark
                checked={formData.category === "Покупка и установка имплантов"}
                event={handleInputChange}
              />
              <Radio
                required
                title="Только установка имплантов"
                name="category"
                defaultValue="Только установка имплантов"
                dark
                checked={formData.category === "Только установка имплантов"}
                event={handleInputChange}
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
                defaultValue="до 12 дня"
                dark
                checked={formData.group === "до 12 дня"}
                event={handleInputChange}
              />
              <Radio
                required
                title="после 12 дня"
                name="group"
                defaultValue="после 12 дня"
                dark
                checked={formData.group === "после 12 дня"}
                event={handleInputChange}
              />
              <Radio
                required
                title="в любое время"
                name="group"
                defaultValue="в любое время"
                dark
                checked={formData.group === "в любое время"}
                event={handleInputChange}
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
