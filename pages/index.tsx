import React from "react";
import Header1 from "./component/Header1";
import Header2 from "./component/Header2";
import Header3 from "./component/Header3";
import Image from "next/image";
import Head from "next/head";
import Notify from "./component/Notify";
import Footer from "./component/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          OYO : India's Best Online Hotel Booking Site For Sanitized Stay.
        </title>
        <link rel="icon" href="/icon.png"></link>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
        <div className="my-14">
          <Image
            src={"/banner1.avif"}
            alt="banner"
            width={200}
            height={400}
            className="w-full h-80"
          />
        </div>

        <div className="mb-14">
          <Image
            src={"/banner2.avif"}
            alt="banner"
            width={200}
            height={400}
            className="w-full h-52"
          />
        </div>
        <Notify />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
