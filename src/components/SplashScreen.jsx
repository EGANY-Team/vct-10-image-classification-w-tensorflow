import React from "react";

import styles from "./SplashScreen.module.css";

const SplashScreen = () => {
  return (
    <div className={styles.SplashScreen}>
      <span role="img" aria-label="loading icon">
        ❤️
      </span>
      <p>Vọc cùng Thành #10</p>
    </div>
  );
};

export default SplashScreen;
