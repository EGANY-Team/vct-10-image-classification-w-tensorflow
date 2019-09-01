import React from "react";

import styles from "./PredictionList.module.css";

const PredictionList = ({ predictions }) => {
  if (!predictions || !Array.isArray(predictions)) return null;
  if (predictions.length === 0) {
    return (
      <p className={styles.EmptyPredictionList}>
        Hãy upload hình để phân tích tags
      </p>
    );
  }

  return (
    <ul className={styles.PredictionList}>
      {predictions.map((p, idx) => {
        const percentage = Math.round(p.probability * 100);
        const confStyle = (() => {
          if (percentage <= 10) return styles.LowPercentage;
          if (percentage > 10 && percentage < 50)
            return styles.MediumPercentage;
          return styles.HighPercentage;
        })();
        return (
          <li prediction={p} key={idx}>
            {p.className} - <span className={confStyle}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};

export default PredictionList;
