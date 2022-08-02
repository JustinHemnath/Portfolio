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
        className="weatherData">
      <div className="weather-div-1">
        <b style={{ fontSize: "4rem", letterSpacing: 2 }}>{place}</b>
      </div>

      <div className="weather-div-2">
        <b style={{ fontSize: "2rem" }}>{tempMin}<br />Min</b>
        <b style={{ fontSize: "5.5rem" }}>{temp}</b>
        <b style={{ fontSize: "2rem" }}>{tempMax}<br />Max</b>
      </div>

      <div className="weather-div-3">
        <b style={{ fontSize: "3rem", letterSpacing: 2 }}>
              {climate}
        </b>
      </div>
    </motion.div>
  );
}

export default WeatherData;
