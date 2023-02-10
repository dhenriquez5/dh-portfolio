import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Layout } from "../../components/Layout";
import { posts } from "../../utils/data";
import { PostCard } from "../../components/PostCard";
import { useRouter } from "next/router";
import nProgress from "nprogress";

const inter = Inter({ subsets: ["latin"] });

export default function jsBot() {
  const router = useRouter();

  const inputref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) nProgress.start();
    nProgress.done();
  }, [isLoading]);

  useEffect(() => {
    if (inputref.current) {
      inputref.current.focus();
    }
  }, []);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.currentTarget.value);
  };

  const handleSearch = async (e: React.SyntheticEvent) => {
    setResult("");
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setIsLoading(false);
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
    } catch (error: any) {
      // Consider implementing your own error handling logic here
      setIsLoading(false);
      console.error(error);
      alert(error?.message);
    }
  };

  return (
    <>
      <Layout
        title="JSBot David Henriquez"
        description="Jsbot that helps you to use javascript in a best way"
        footer={false}
      >
        <h3 className="text-center text-light">JsBot</h3>
        <p className="lead text-center text-light">
          This is a usefull tool that allow you ask anything about
          javascript.... and maybe other stuffs
        </p>
        <form action="" onSubmit={handleSearch}>
          {/* <div className="form-group text-center">
            <input
              ref={inputref}
              className="form-control"
              id="disabledInput"
              type="text"
              placeholder="Enter here your search... an press enter"
            />
          </div> */}
          <div className="input-group mb-3 text-center">
            <input
              ref={inputref}
              onChange={handleChange}
              value={text}
              name="text"
              type="text"
              className="form-control"
              placeholder="Enter here your search..."
            />
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
        </form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              zIndex: 1000,
              position: "fixed",
              overflow: "auto",
              padding: "2rem",
              width: "80%",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#dddfe1",
              margin: "auto",
              borderRadius: 10,
            }}
          >
            <p
              style={{ whiteSpace: "break-spaces" }}
              className="text-center lead"
            >
              {result}
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
