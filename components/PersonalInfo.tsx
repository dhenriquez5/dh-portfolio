import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const PersonalInfo = () => {
  return (
    <header className="row">
      <div className="col-md-12">
        <div
          style={{ borderRadius: "8px" }}
          className="card card-body bg-primary text-light"
        >
          <div className="row">
            <div className="col-md-3 d-flex justify-content-center ">
              <Image
                src="/foto.jpeg"
                alt="Foto de David Henriquez"
                width={150}
                height={100}
                className={`img-thumbnail bg-info ${styles.foto}`}
              />
            </div>
            <div className="col-md-9">
              <h3>David Henriquez Turcios</h3>
              <h5>Software Engineer/FullStack Developer/Software Consultant</h5>
              <p className={styles.description_paragraph}>
                I am a FullStack Developer with 6 years of experience working
                with different technologies like ReactJs, NodeJs, React Native,
                Angular, NetCore who really enjoy programming and learning new
                technologies.
              </p>
              <div className="d-flex justify-content-center">
                <Link target="_blank" href="mailto:dhenriquezturcios@gmail.com?subject=I found your webpage and want to reach you out" className="btn btn-info">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PersonalInfo;
