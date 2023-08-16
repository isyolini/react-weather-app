import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "mercoledì 12:00",
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Type a city..."
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-dark w-100"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>

        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="icon"
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">ºC | ºF</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ate4fc772f93a185a4d70db0f2foe64c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
