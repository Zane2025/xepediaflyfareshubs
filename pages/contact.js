import Bread from "@/components/common/breadcrumbs";
import Popup from "@/components/common/popup";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | XepediaFlyFaresHub</title>
        <meta
          name="description"
          content="Your best travel partner for a perfect fit vacation planning."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Bread mainhead="Home" title="Contact Us" />
      <Popup />
      <ContactPage />
      <Footer />
    </>
  );
};

export default contact;
