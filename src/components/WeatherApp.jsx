import SearchBox from "./SearchBox";
import Home from "./Home";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Lucknow",
    country: "IN",
    description: "Haze",
    feels: 31.68,
    humidity: 45,
    max_temp: 30.99,
    min_temp: 30.99,
    sunrise: 1715646,
    sunset: 171555,
    temp: 30.99,
    wind_speed: 3.09,
  });

  let updatedWeather = (result) => {
    setWeatherInfo(result);
  };
  return (
    <>
      <SearchBox updateInfo={updatedWeather} />
      <Home info={weatherInfo} />
    </>
  );
}
