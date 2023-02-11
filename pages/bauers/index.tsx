import React from "react";
import { NextPage } from "next";
import Layout from "@/components/other/Layout/Layout";
import Bauers from "@/components/pages/Bauers/Bauers";
import Head from "next/head";

const BauersPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>World-Implant - импланты Bauers</title>
      </Head>
      <Bauers />
    </Layout>
  );
};

export default BauersPage;
