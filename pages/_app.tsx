import React from "react";
import NextProgressBar from "nextjs-progressbar";
import { NextPage } from "next";
import { AppProps } from "next/app";

import "../app/globals.scss";
import Head from "next/head";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <NextProgressBar
        color="#0075FF"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="World-Implant" />
        <meta name="description" content="Обретите красивую и здоровую улыбку с помощью зубных имплантов. Мы предлагаем продажу и установку высококачественных имплантов в Днепре." />
        <meta name="keywords" content="зубные импланты, продажа, установка, Днепр, восстановление зубов, красивая улыбка, здоровые зубы" />
        <title>World Implant - Продажа и установка зубных имплантов в Днепре</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
