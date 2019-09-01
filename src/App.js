import React, { useEffect, useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";

import styles from "./App.module.css";
import SplashScreen from "./components/SplashScreen";
import Intro from "./components/Intro";
import UploadButton from "./components/UploadButton";
import PredictionList from "./components/PredictionList";

const App = () => {
  const [source, setSource] = useState(null);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);

  // init model
  useEffect(() => {
    mobilenet
      .load({
        version: 2,
        alpha: 1
      })
      .then(setModel)
      .catch(console.log);
  }, []);

  // analyze when image changes
  useEffect(() => {
    if (model && source) {
      const imgEl = document.createElement("img");
      imgEl.src = source;
      model
        .classify(imgEl, 5)
        .then(setPredictions)
        .catch(console.log);
    }
  }, [model, source]);

  if (!model) return <SplashScreen />;
  return (
    <div className={styles.App}>
      <Intro />
      {source && <img className={styles.AppImage} src={source} alt="preview" />}
      <UploadButton source={source} onUploadComplete={setSource} />
      <PredictionList predictions={predictions} />
    </div>
  );
};

export default App;
