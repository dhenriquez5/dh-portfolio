import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  return (
    <>
      <Layout description="Blog David Henriquez"  title="Blog David Henriquez">
        
        <main>
          <h1>Blog</h1>
        </main>
      </Layout>
    </>
  );
}
