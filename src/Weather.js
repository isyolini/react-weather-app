import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
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

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "ate4fc772f93a185a4d70db0f2foe64c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
