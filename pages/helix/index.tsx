import React from "react";
import { NextPage } from "next";
import Layout from "@/components/other/Layout/Layout";
import Helix from "@/components/pages/Helix/Helix";
import Head from "next/head";

const HelixPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>World-Implant - импланты Helix</title>
      </Head>
      <Helix />
    </Layout>
  );
};

export default HelixPage;
