import React, { FC, useState } from "react";

import styles from "./QuestionsSection.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import {
  data,
  Question
} from "@/components/pages/Home/QuestionsSection/QuestionsSection.data";
import Add from "@/components/other/Icons/Add";
import Heading from "@/components/ui/Heading/Heading";

const QuestionsSection: FC = () => {
  const [questions, setQuestions] = useState<Question[]>(data);

  const handleOpen = (id: number) => {
    const current = [...questions];
    current.forEach((question) => {
      if (question.id === id) question.isOpen = !question.isOpen;
    });
    setQuestions(current);
  };

  return (
    <motion.section
      initial={{ translateY: "200px", opacity: 0 }}
      whileInView={{ translateY: "0px", opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section}
    >
      <Heading>Ответы на частые вопросы</Heading>
      <div className={styles.questions}>
        {questions.map((question) => (
          <article key={question.id}>
            <div
              onClick={() => handleOpen(question.id)}
              className={styles.heading}
            >
              <h3>{question.title}</h3>
              <button
                title="Tab Open"
                className={classNames({
                  [styles.rotate]: question.isOpen
                })}
              >
                <Add />
              </button>
            </div>
            <AnimatePresence>
              {question.isOpen && (
                <motion.p
                  initial={{ height: 0, marginTop: 0 }}
                  animate={{ height: "auto", marginTop: 10 }}
                  exit={{ height: 0, marginTop: 0 }}
                  style={{ overflow: "hidden" }}
                >
                  {question.description}
                </motion.p>
              )}
            </AnimatePresence>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default QuestionsSection;
