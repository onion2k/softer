import React from "react";
import Link from "gatsby-link";

import styles from "./footer.module.css";

export default ({ data }) => (
  <footer>
    <Link to="/" className={styles.byline}>
      Ooer <span>By</span> Chris Neale
    </Link>
    <Link to="/" className={styles.home}>Back to Home</Link>
  </footer>
);
