import React, { FC } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

import styles from "./Dropdown.module.scss";
import Button from "@/components/ui/Button/Button";
import Logo from "@/components/ui/Logo/Logo";
import Cross from "@/components/other/Icons/Cross";
import classNames from "classnames";

interface Props {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: FC<Props> = ({ isModal, setIsModal }) => {
  return createPortal(
    <div
      className={classNames({
        [styles.overlay]: true,
        [styles.show]: isModal
      })}
      onClick={() => setIsModal(false)}
    >
      <div
        className={styles.dropdown}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <Logo />
          <button onClick={() => setIsModal(false)}>
            <Cross />
          </button>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/tariffs">Тарифы и цены</Link>
            </li>
            <li>
              <Link href="/steps">Этапы обучения</Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <Button
            onClick={() => (document.location.href = "tel:89857751262")}
            className={styles.phone}
            primary
          >
            +7 (985) 775-12-62
          </Button>
          <Button className={styles.authorize} secondary>
            Авторизация
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("overlay") as HTMLElement
  );
};

export default Dropdown;