import React from "react";
import { NextPage } from "next";
import Layout from "@/components/other/Layout/Layout";
import Vitaplant from "@/components/pages/Vitaplant/Vitaplant";
import Head from "next/head";

const VitaplantPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>World-Implant - импланты Vitaplant</title>
      </Head>
      <Vitaplant />
    </Layout>
  );
};

export default VitaplantPage;
