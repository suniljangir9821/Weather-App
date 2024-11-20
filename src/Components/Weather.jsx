import React, { useEffect, useRef, useState } from "react";
import humidity from "../assets/humidity.png";
import day from "../assets/day-cloudy.png";
import daySunny from "../assets/day-sunny.png";
import dayCloud from "../assets/day-cloudy.png";
import cloud from "../assets/cloudy.png";
import rainMix from "../assets/day-rain-mix.png";
import nightCloudy from "../assets/night-alt-cloudy.png";
import nightRain from "../assets/night-alt-rain.png";
import dayRain from "../assets/day-rain.png";

function Weather(props) {
  const [data, setData] = useState(false);
  const inputRef = useRef();

  const allIcon = {
    "01d": daySunny,
    "01n": "wi-night-clear",
    "02d": dayCloud,
    "02n": nightCloudy,
    "03d": day,
    "03n": nightCloudy,
    "04d": cloud,
    "04n": cloud,
    "09d": dayRain,
    "09n": nightRain,
    "10d": rainMix,
    "10n": nightRain,
    "11d": "wi-day-thunderstorm",
  };
  const search = async (city) => {
    if (city === '') {
      alert("Please enter a city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const jsonData = await response.json();
      //   console.log(jsonData);
        // const icon = allIcon(jsonData.weather[0].icon)
      setData({
        city: jsonData.name,
        temperature: Math.floor(jsonData.main.temp),
        humidity: jsonData.main.humidity,
        windSpeed: jsonData.wind.speed,
        // icon: icon,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${jsonData.status}`);
        alert(jsonData.message);
        return;
      }
    } catch (error) {
      setData(false);
      console.error("There was a problem with the fetch operation:", error);
      return null;
    }
  };

  useEffect(() => {
    search("New Delhi");
  }, []);

  return (
    <div
      className={`container w-50 p-5 rounded-3 my-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}
    >
      <h2>Weather Forecast</h2>
      <div className=" d-flex">
        <input
          type="text"
          placeholder="Search City"
          className="w-100 p-2 rounded border bordered "
          style={{ outline: "none", border: "none" }}
          ref={inputRef}
        />
        <button
          className="btn btn-primary mx-2"
          onClick={() => search(inputRef.current.value)}
        >
          Search
        </button>
      </div>
      {data ? (
        <>
          <div className="my-2">
            {/* <img src={data.icon} alt="" /> */}
            <p className="fs-1 text-center ">{data.temperature} °C</p>
            <p className="fs-2  text-center ">{data.city}</p>
            <div className="row">
              <div className="col fs-4 text-center">
                {/* <img className="w-25 d-inline" src={humidity} alt="" /> */}
                <div>
                  <p>{data.humidity} %</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col fs-4 text-center">
                {/* <img src="" alt="" /> */}
                <div>
                  <p>{data.windSpeed} Km/h</p>
                  <span>Wind speed</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Weather;
