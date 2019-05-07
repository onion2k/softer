import React from "react";
import Link from "gatsby-link";
import styles from "./navigation.module.css";

export default () => (
  <ul className={styles.navigation}>
    <li className={styles.navigationItem}>
      <Link to="/">Home</Link>
    </li>
    <li className={styles.navigationItem}>
      <Link to="/">Experiments</Link>
    </li>
    <li className={styles.navigationItem}>
      <a href="https://github.com/onion2k/">Github</a>
    </li>
    <li className={styles.navigationItem}>
      <a href="https://linkedin.com/cdneale/">LinkedIn</a>
    </li>
  </ul>
);
