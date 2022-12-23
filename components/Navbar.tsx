import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export const Navbar = () => {
  return (
    <>
      <nav  className={`navbar navbar-expand-lg navbar-dark bg-primary ${styles.header}`}>
        <div className="container">
          <Link className="navbar-brand" href="/">
            Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/git">
                  Git
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
