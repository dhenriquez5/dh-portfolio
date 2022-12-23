import Link from "next/link";
import React from "react";
import { Layout } from "../components/Layout";

const ErrorPage = () => {
  return (
    <Layout
      description="Error Page for David Henriquez page"
      title="Error Page"
    >
      <div className="text-center">
        <h1>404</h1>
        <p>
          this page does not exist. Please return to <Link href="/">Home</Link>
        </p>
      </div>
    </Layout>
  );
};

export default ErrorPage;
