import React from "react";

import styles from "./footer.module.css";

export default ({ data }) => (
  <footer>
    <a className={styles.byline}>
      Ooer <span>By</span> Chris Neale
    </a>
    <a className={styles.home}>Back to Home</a>
  </footer>
);
