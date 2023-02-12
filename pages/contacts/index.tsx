import React from "react";
import { NextPage } from "next";
import Layout from "@/components/other/Layout/Layout";
import Contacts from "@/components/pages/Contacts/Contacts";
import Head from "next/head";

const ContactsPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>World-Implant - Контакты</title>
      </Head>
      <Contacts />
    </Layout>
  );
};

export default ContactsPage;
