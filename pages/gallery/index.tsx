import React from "react";
import { NextPage } from "next";
import Layout from "@/components/other/Layout/Layout";
import PhotoGallery from "@/components/pages/Gallery/Gallery";
import Head from "next/head";

const GalleryPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>World-Implant - Наша фото-галерея</title>
      </Head>
      <PhotoGallery />
    </Layout>
  );
};

export default GalleryPage;
