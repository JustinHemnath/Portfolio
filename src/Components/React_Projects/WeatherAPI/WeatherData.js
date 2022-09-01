import React from "react";
import "./WeatherData.css";
import { motion } from "framer-motion";

function WeatherData({ info }) {
  const { place, temp, tempMin, tempMax, climate } = info;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="weatherData"
    >
      <div className="weather-div-1">
        <b>{place}</b>
      </div>

      <div className="weather-div-2">
        <b className="tempSec">
          {tempMin}
          <br />
          Min
        </b>
        <b className="tempPri">{temp}</b>
        <b className="tempSec">
          {tempMax}
          <br />
          Max
        </b>
      </div>

      <div className="weather-div-3">
        <b>{climate}</b>
      </div>
    </motion.div>
  );
}

export default WeatherData;
