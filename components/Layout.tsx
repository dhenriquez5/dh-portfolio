import Head from "next/head";
import React, { FC, useEffect } from "react";
import { Navbar } from "./Navbar";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { Footer } from "./Footer";
import { AnimationStars } from './AnimationStars';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  footer?: boolean;
}

export const Layout: FC<LayoutProps> = ({
  children,
  title,
  description,
  footer = true,
}) => {
  const router = useRouter();
  const handleRouteChange = (url: string) => {
    console.log(url);
    return nProgress.start();
  };
  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => nProgress.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <AnimationStars/>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container py-4">{children}</main>

      <Footer isDisplayed={footer} />
    </div>
  );
};
