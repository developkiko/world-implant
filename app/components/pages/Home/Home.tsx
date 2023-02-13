import React, { FC } from "react";

import styles from "./Home.module.scss";
import CategoriesSection from "@/components/pages/Home/CategoriesSection/CategoriesSection";
import FormSection from "@/components/pages/Home/FormSection/FormSection";
import PrimarySection from "@/components/pages/Home/PrimarySection/PrimarySection";
import QuestionsSection from "@/components/pages/Home/QuestionsSection/QuestionsSection";
import GallerySection from "@/components/pages/Home/GallerySection/GallerySection";

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <PrimarySection />
      <CategoriesSection />
      <GallerySection />
      <QuestionsSection />
      <FormSection />
    </main>
  );
};

export default Home;
