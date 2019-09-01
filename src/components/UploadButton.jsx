import React from "react";

import styles from "./UploadButton.module.css";

const UploadButton = ({ source, onUploadComplete }) => {
  const btnLabel = source ? "Change" : "Upload";
  const handleUpload = event => {
    const file = event.target.files[0];

    if (file && typeof onUploadComplete === "function") {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        onUploadComplete(reader.result);
      });
    }
  };

  return (
    <div className={styles.UploadButton}>
      <label htmlFor="uploadInput">{btnLabel}</label>
      <input id="uploadInput" type="file" onChange={handleUpload} />
    </div>
  );
};

export default UploadButton;
