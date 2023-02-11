import React, { FC } from "react";
import styles from "@/components/pages/Categories.module.scss";
import QuestionsSection from "@/components/pages/Home/QuestionsSection/QuestionsSection";

const Unident: FC = () => {
  return (
    <main className={styles.main}>
      <QuestionsSection />
    </main>
  );
};

export default Unident;