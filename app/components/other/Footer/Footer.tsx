import React, { FC } from "react";

import styles from "./Footer.module.scss";
import Logo from "@/components/ui/Logo/Logo";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
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
    </footer>
  );
};

export default Footer;
