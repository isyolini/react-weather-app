import React from "react";
import "./Weather.css";

export default function Weather() {
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

      <h1>Rome</h1>

      <ul>
        <li>Monday: 8:32</li>
        <li>Clear</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="clear day icon"
            className="icon"
          />
          <span className="temperature">27</span>
          <span className="unit">ºC | ºF</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 79%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
