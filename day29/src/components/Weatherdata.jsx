import React from "react";
import {useSelector} from 'react-redux'


function Weatherdata(){
  const {whether} = useSelector(state => state.setInitial)
  return (
    <>
      <figure>
        <div>
          <h1>{whether.temp}&#x2103; </h1>
          <span>{whether.condition_text}</span>
          <h6>
            {whether.locationName},{whether.country},{" "}
            {whether.localtime.slice(11)}
          </h6>
        </div>
        <div>
          <img src={whether.condition_icon} alt="" />
        </div>
      </figure>
      <aside>
        <div>
          <h4>{whether.humidity}</h4>
          <h6>Humidity</h6>
        </div>
        <div>
          <h4>{whether.wind_dir}</h4>
          <h6>Wind Direction</h6>
        </div>
        <div>
          <h4>{whether.wind_kph}</h4>
          <h6>Wind Speed(Kph)</h6>
        </div>
      </aside>
    </>
  );
};

export default Weatherdata;