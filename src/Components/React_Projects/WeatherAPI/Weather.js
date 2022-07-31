import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherData from './WeatherData'

function Weather() {
  const [city, setCity] = useState("");
  const [ info, setInfo ] = useState(false)

  
  const apiCall = async (e) => {
    e.preventDefault()
    const locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

    try {
      const response = await axios.get(locationUrl);
      const locData = response.data;


      setInfo({  
        place: `${locData.name}, ${locData.sys.country}`,
        temp: `${parseInt(locData.main.temp)}°C`,
        tempMin: `${parseInt(locData.main.temp_min)}°C`,
        tempMax: `${parseInt(locData.main.temp_max)}°C`,
        climate: locData.weather[0].description.toUpperCase()
      })

      setCity('')

    } catch {
      console.log("Location does not exist");
    }
  };

  return (
    <div className="weatherPage">
      <h1 className="weatherPage-header">WEATHER APP USING API</h1>
      <div className="weatherPage-underline"></div>
        <form onSubmit={apiCall}>
          <input
            placeholder="Enter location"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <button>Submit</button>
        </form>

        {info && <WeatherData info={info} />}
    </div>
  );
}

export default Weather;
