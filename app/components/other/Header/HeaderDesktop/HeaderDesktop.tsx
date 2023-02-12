import React, { FC } from "react";
import MessBut from "@/components/other/Header/MessBut/MessBut";

import styles from "./HeaderDesktop.module.scss";
import Logo from "@/components/ui/Logo/Logo";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";

const HeaderDesktop: FC = () => {
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
                Задать вопрос
              </Link>
            </li>
            <li>
              <Link href="/gallery">Галерея</Link>
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
        <MessBut/>
      </div>
    </header>
  );
};

export default HeaderDesktop;
