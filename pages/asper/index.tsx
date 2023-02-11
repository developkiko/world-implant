import React from "react";
import { NextPage } from "next";
import Layout from "@/components/other/Layout/Layout";
import Asper from "@/components/pages/Asper/Asper";
import Head from "next/head";

const AsperPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>World-Implant - Контакты</title>
      </Head>
      <Asper />
    </Layout>
  );
};

export default AsperPage;
