import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import './App.css'

export default function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const updatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=4b03a187449744a482b145514210608&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaceData(data);
      });
  };

  return (
    <div className="App p-4">
      <div className="container p-4">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <input
              type="text"
              className="p-1 px-2 m-2"
              value={place}
              placeholder="Enter City..."
              onChange={(e) => setPlace(e.target.value)}
            />
            <button className="btn btn-primary" onClick={updatePlaceData}>
              Search
            </button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 mt-4">
            <div className="card">
              {placeData.location ? (
                <>
                  <div className="location">
                    <h2>{placeData.location.name}</h2>
                    <h6>
                      {placeData.location.region} , {placeData.location.country}
                    </h6>
                  </div>
                  <div className="weather my-2">
                    <img
                      classNmae="my-2"
                      src={placeData.current.condition.icon}
                      alt=""
                    />
                    <h3>{placeData.current.temp_c}°C </h3>
                    <h6>{placeData.current.condition.text}</h6>
                  </div>
                  <div className="container my-3">
                    <div className="row d-flex weatherPlace">
                      <div className="col">
                        <div className="title">Wind Speed</div>
                        <div className="data ">
                          {placeData.current.wind_kph}
                          <span className="unit">km</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Humidity</div>
                        <div className="data">
                          {placeData.current.humidity}
                          <span className="unit">%</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Precipitation</div>
                        <div className="data">
                          {placeData.current.precip_mm}
                          <span className="unit">mm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <h2>Enter City</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}