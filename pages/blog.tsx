import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout";
import { posts } from "../utils/data";
import { PostCard } from "../components/PostCard";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  return (
    <>
      <Layout
        description="Blog David Henriquez"
        title="Blog David Henriquez"
        footer={false}
      >
        <h3 className="text-center text-light">My Blog</h3>
        <div className="row">
          {posts && posts.map((post) => <PostCard key={post.id} {...post} />)}
        </div>
      </Layout>
    </>
  );
}
