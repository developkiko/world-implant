import React, {FC, useState, FormEvent, ChangeEvent} from "react";
import {motion} from "framer-motion";
import FormHandler from "@/components/other/FormHandler/FormHandler";

import styles from "./ContactsSection.module.scss";
import forms from "@/components/other/FormHandler/Form.module.scss";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import Arrow from "@/components/other/Icons/Arrow";
import Phone from "@/components/other/Icons/Phone";
import Mail from "@/components/other/Icons/Mail";
import Geo from "@/components/other/Icons/Geo";

const ContactsSection: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    tel: ''
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
    const {name, tel} = data;
    const message = `${name} Оставил заявку на сайте World-Implant, на странице контактов, вот его телефон: ${tel}`;
    const status = await FormHandler(message);
    console.log(status ? "все ок!" : "беда!");
    setShowing(status);
    let form = document.getElementsByTagName("form").item(0);
    if (form && status) form.style.display = "none";
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  return (
    <motion.section
      initial={{translateX: "200px", opacity: 0}}
      whileInView={{translateX: "0px", opacity: 1}}
      viewport={{once: true}}
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
        <div className={forms.modal}>
          {isShowing ? <div>Ваше заявка успешно отправлена! Ожидайте, наш менеджер свяжеться с вами в ближайшее время.</div> : <span>Возникла проблема при отправке формы, возможно Вам стоит попробовать еще раз позже!</span>}
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              title="Имя"
              name="name"
              placeholder="Введите ваше имя"
              value={formData.name}
              required
              event={handleInputChange}
            />
            <Input
              title="Номер телефона"
              name="tel"
              type="tel"
              pattern="(\+?\d{2})?\d{10}"
              placeholder="Минимум 10 цифр, можно без +380"
              value={formData.tel}
              required
              event={handleInputChange}
            />
          </div>
          <Button primary>
            Записаться <Arrow/>
          </Button>
        </form>
      </div>
      <div className={styles.info}>
        <h5>Контактные данные</h5>
        <ul>
          <li>
          <span>
            <Phone/> <h6>Позвони сейчас</h6>
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
            <Mail/> <h6>Email</h6>
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
            <Geo/> <h6>Местоположение</h6>
          </span>
            <span>
            <a
              href="https://goo.gl/maps/GVGZFpp3x5Z9UBXR7"
              rel="noreferrer"
              target="_blank"
            >
              ул. Князя Ярослава Мудрого (Ленинградская), 68, Днепр, Днепропетровская область, 49000
              ТДВ "КОНЦЕРН "ВЕСНА", 3 этаж, офис 317
            </a>
          </span>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default ContactsSection;
