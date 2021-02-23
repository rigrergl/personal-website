import React, { ReactNode } from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Image from "next/image";

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

      <div className={styles.container}>
        {children}

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
