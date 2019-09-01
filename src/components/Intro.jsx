import React from "react";

import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <header className={styles.Intro}>
      <h3>Vọc cùng Thành #10</h3>
      <h2>Image classification với Tensorflow</h2>
      <p>
        <a
          href="https://devnow.vn/?p=3142"
          target="_blank"
          rel="noopener noreferrer"
        >
          Article
        </a>
        <a
          href="https://github.com/EGANY-Team/vct-10-image-classification-w-tensorflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
    </header>
  );
};

export default Intro;
