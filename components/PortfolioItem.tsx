import React, { FC } from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css';

interface props {
  name: string;
  description: string;
  webSite: string;
  img: string;
}

export const PortfolioItem: FC<props> = ({
  name,
  description,
  webSite,
  img,
}) => {
  return (
    <div className="col-md-3 col-xs-12 p-2">
      <div className="card h-100" style={{borderRadius:'8px'}}>
        <div className={styles.overflow_img}>
            <img style={{ borderRadius: "8px" }}  src={img} alt={name} className={`img-thumbnail ${styles.zoom_img}`}  />
        </div>
        <div className="card-body" >
          <h6 className="text-center">{name}</h6>
          <p>{description}</p>
          <Link href={webSite}>Know more</Link>
        </div>
      </div>
    </div>
  );
};
