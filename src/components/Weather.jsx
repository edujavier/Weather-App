import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [isCelsius, setIsCelsius] = useState(true);


  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=-0.2232&lon=-78.5127&appid=a85e15f98957e1ccbfb71f807f780b1b').then(res => setWeather(res.data));
  }, []);
  console.log(weather);
  return (
    <div>
      <div className="card">
        <h1>Weather App</h1>
        <h2>Ciudad {weather.name}, {weather.sys?.country}</h2>
        <div className="weather_Img_Data">
          <img src={weather.weather?.[0].icon} width='100px' />
          <div className="info">
            <p>"{weather.weather?.[0].description}"</p>

            <p>
              <i class="fa-solid fa-wind"></i> {''}
              Wind Speed: {weather.wind?.speed} m/s
            </p>
            <p>
              <i class="fa-solid fa-cloud"></i> {''}
              {weather.weather?.[0].main}: {weather.clouds?.all} %
            </p>
            <p>
              <i class="fa-solid fa-temperature-half"></i> {''}
              Preassure: {weather.main?.pressure} mb
            </p>
          </div>
        </div>
        <div className="degrees">
          <p>
            {isCelsius ? (weather.main?.temp - 273.15).toFixed(2) : (((weather.main?.temp - 273.15) * 9 / 5) + 32).toFixed(2)} {' '}
            {isCelsius ? 'C' : 'F'}
          </p>

          {/*<p>{weather.main?.temp - 273.15} C</p>
        <p>{((weather.main?.temp - 273.15) * 9 / 5) + 32} K</p>*/}
        </div>
        <button onClick={() => setIsCelsius(!isCelsius)}>Degrees F-C</button>
      </div>

    </div>
  );
};

export default Weather;