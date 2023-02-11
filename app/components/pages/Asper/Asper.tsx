import React, { FC } from "react";
import styles from "@/components/pages/Categories.module.scss";
import PrimarySection from "@/components/pages/Home/PrimarySection/PrimarySection";
import CategoriesSection from "@/components/pages/Home/CategoriesSection/CategoriesSection";
import QuestionsSection from "@/components/pages/Home/QuestionsSection/QuestionsSection";
import FormSection from "@/components/pages/Home/FormSection/FormSection";

const Asper: FC = () => {
  return (
    <main className={styles.main}>
      <PrimarySection />
      <CategoriesSection />
      <QuestionsSection />
      <FormSection />
    </main>
  );
};

export default Asper;