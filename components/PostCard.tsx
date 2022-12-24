import React, { FC } from "react";
import styles from "../styles/Home.module.css";
import Link from 'next/link';

interface props {
  title: string;
  description: string;
  image: string;
}
export const PostCard: FC<props> = ({ title, description, image }) => {
  return (
    <div className="col-md-4 col-xs-12 mt-2">
      <div className="card h-100" style={{ borderRadius: "8px" }}>
        <div className={styles.overflow_img}>
          <img
            style={{ borderRadius: "8px", height:"200px" }}
            src={image}
            alt={title}
            className={`img-fluid card-img-top ${styles.zoom_img}`}
          />
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-footer bg-light d-flex justify-content-end">
          <Link href="/#" className="btn btn-outline-info">Read</Link>
        </div>
      </div>
    </div>
  );
};
