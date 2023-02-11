import React from "react";
import { NextPage } from "next";
import Layout from "@/components/other/Layout/Layout";
import Unident from "@/components/pages/Unident/Unident";
import Head from "next/head";

const UnidentPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>World-Implant - импланты Unident</title>
      </Head>
      <Unident />
    </Layout>
  );
};

export default UnidentPage;
