import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon
        code={props.data.condition.icon}
        className="Icon"
        size={32}
      />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {minTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {maxTemperature()}
        </span>
      </div>
    </div>
  );
}
