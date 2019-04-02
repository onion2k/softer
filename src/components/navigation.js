import React from "react";
import Link from "gatsby-link";
import styles from "./navigation.module.css";

export default () => (
  <ul className={styles.navigation}>
    <li className={styles.navigationItem}>
      <Link to="/">Home</Link>
    </li>
    <li className={styles.navigationItem}>
      <Link to="/">Blog</Link>
    </li>
    <li className={styles.navigationItem}>
      <Link to="/">Experiments</Link>
    </li>
    <li className={styles.navigationItem}>
      <Link to="/">Github</Link>
    </li>
    <li className={styles.navigationItem}>
      <Link to="/">LinkedIn</Link>
    </li>
  </ul>
);
