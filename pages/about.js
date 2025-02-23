import Bread from "@/components/common/breadcrumbs";
import Popup from "@/components/common/popup";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>About Us | XepediaFlyFaresHub</title>
        <meta
          name="description"
          content="Your best travel partner for a perfect fit vacation planning."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Bread mainhead="Home" title="About Us" />
      <Popup />
      <div className="container mt-5">
        <h3>About Us</h3>
        <p className="about-p">Last revised on 1 Jan 2025</p>
        <div className="about-content">
          <p style={{ marginTop: "70px" }}>
            Welcome to Xepedia FlyFares Hub, one of the fastest-growing online
            travel sites dedicated to bringing your traveling dreams into
            reality. Regardless of whether it's an enterprise trip, a vacation
            with the family, or an individualized adventure that you have been
            planning to undertake, we provide detailed solutions to help meet
            budgets and preferences in travel services. With hundreds of
            thousands of partners in hotels across the world and an inventory of
            thousands of flights, we are bringing you the best deals on
            accommodations, activities, and travel services. With five-star
            hotels to cozy budget-friendly stays, from adventurous tours to
            relaxing leisure experiences, Xepedia FlyFares Hub will be your
            one-stop shop for all travel needs.
          </p>
          <strong>Why Choose Xepedia FlyFares Hub?</strong>
          <p className="pt-4">
            A Great Array of Flights, and Activities: Let's find something for
            everybody. Best Prices: No one can offer you the best value than us
            with our unbeatable prices. Global Reach: With partnerships all over
            the world, we make booking travel services for any destination easy
            for you. User-Friendly Experience: We have developed our platform in
            such a way that it makes your planning and booking of trip simple,
            quick, and hassle-free. At Xepedia FlyFares Hub, we believe that
            travel enriches lives, and we are committed to providing you with
            the tools and resources to explore the world. Whether you are
            looking for adventure, relaxation, or cultural experiences, we have
            got you covered.
          </p>
          <p className="pt-4">
            Start your journey with Xepedia FlyFares Hub today-your gateway to
            unforgettable travel experiences!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default about;
