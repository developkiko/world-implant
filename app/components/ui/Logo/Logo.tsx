import React, { FC } from "react";

import Image from "next/image";

import styles from "./Logo.module.scss";
import Link from "next/link";

import logo from '/public/images/logo.png';

const Logo: FC = () => {
  return (
    <Link href="/#header" scroll={false} className={styles.logo}>
      <Image src={logo} alt="Логотип" width="140" height="51" />
    </Link>
  );
};

export default Logo;
