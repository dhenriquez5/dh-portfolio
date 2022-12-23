import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Git() {
  return (
    <>
      <Layout description="Git David Henriquez"  title="Git David Henriquez">
        <main >
          <h1>Git</h1>
        </main>
      </Layout>
    </>
  );
}
