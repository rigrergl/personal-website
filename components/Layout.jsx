import React, { ReactNode } from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
// import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// type Props = {
//   children?: ReactNode;
//   title?: string;
// };

const Layout = ({ children, title = "Rigre's personal website" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/RG.png" />
      </Head>

      <Navbar />
      <div className={styles.container}>
        {children}

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
