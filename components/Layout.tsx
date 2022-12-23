import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "./Navbar";
import styles from "../styles/Home.module.css";
interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container py-4">{children}</main>
    </div>
  );
};
