import React, { FC } from "react";
import styles from "../styles/Home.module.css";

interface props {
    isDisplayed: boolean;
}

export const Footer:FC<props> = ({isDisplayed}) => {
  return (
    <>
    {
        isDisplayed && 
        <footer className={`bg-primary text-light text-center ${styles.footer}`}>
        <div className="container p-3">
          <h5 className="text-light">&copy; David Henriquez Portfolio</h5>
          <span>2023- {new Date().getFullYear()}</span> <br />
          <span>All rights reserved</span>
        </div>
      </footer>
    }
    </>
  );
};
