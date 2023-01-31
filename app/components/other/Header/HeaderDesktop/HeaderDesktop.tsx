import React, { FC } from "react";

import styles from "./HeaderDesktop.module.scss";

import Logo from "@/components/ui/Logo/Logo";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";

interface Props {
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderDesktop: FC<Props> = ({ setIsModalShow }) => {
  return (
    <header className={styles.desktop}>
      <div className={styles.about}>
        <Logo />
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/#categories" scroll={false}>
                Тарифы и цены
              </Link>
            </li>
            <li>
              <Link href="/#form" scroll={false}>
                Заявка на обучение
              </Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.actions}>
        <Button
          onClick={() => (document.location.href = "tel:+380683656767")}
          className={styles.phone}
          primary
        >
          +38 (068) 365-67-67
        </Button>
        <Button
          onClick={() => setIsModalShow((prev) => !prev)}
          className={styles.authorize}
          secondary
        >
          Авторизация
        </Button>
      </div>
    </header>
  );
};

export default HeaderDesktop;
