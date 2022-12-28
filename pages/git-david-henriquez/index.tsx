import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.css";
import { Layout } from "../../components/Layout";
import Error from "../_error";

const inter = Inter({ subsets: ["latin"] });

export default function Git({ user, statusCode }: any) {
  if (statusCode) {
    return <Error />;
  }

  const goToUnosquare = () => {
    window.open("https://www.unosquare.com/", "_blank");
  };

  return (
    <>
      <Layout
        description="Git David Henriquez"
        title="Git information about my gitHub profile"
        footer={false}
      >
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div
              className="card bg-primary text-light card-body text-center"
              style={{ borderRadius: "8px" }}
            >
              <h3>{user.name}</h3>
              <img
                src={user.avatar_url}
                alt="Avatar Imagen"
                className={`img-fluid ${styles.foto_git}`}
              />
              <p className="mt-1">{user.bio}</p>
              <p>
                Company:{" "}
                <b onClick={goToUnosquare} className={styles.pointerItem}>
                  {user.company}
                </b>{" "}
              </p>
              <a
                href={user.blog}
                target="_blank"
                className="btn btn-outline-light my-2"
              >
                My Profile
              </a>
              <a
                href={user.html_url}
                target="_blank"
                className="btn btn-outline-light"
              >
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/dhenriquez5");
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode,
    },
  };
}
