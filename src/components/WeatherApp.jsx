import SearchBox from "./SearchBox";
import Home from "./Home";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null)
 
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
