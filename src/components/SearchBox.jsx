import { useState } from "react";

export default function SearchBox({updateInfo}) {
  const [city, setCity] = useState("");
  const API_KEY = "8d06d5a7e7a92e000d9e0984a65d099f";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let getWeather = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();

    let result = {
      city: city,
      feels: jsonResponse.main.feels_like,
      humidity: jsonResponse.main.humidity,
      temp: jsonResponse.main.temp,
      max_temp: jsonResponse.main.temp_max,
      min_temp: jsonResponse.main.temp_min,
      country: jsonResponse.sys.country,
      sunrise: jsonResponse.sys.sunrise,
      sunset: jsonResponse.sys.sunset,
      description: jsonResponse.weather[0].description,
      wind_speed: jsonResponse.wind.speed,
    };

    return result;
  };

  let handleInp = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");

    let newInfo = await getWeather();
    updateInfo(newInfo);
  };

  return (
    <>
      <div className="w-[500px] md:w-[700px] lg:w-[800px] md:mx-20 h-screen  text-black p-5 my-5">
        <section className="searchBar  mx-auto">
          <div className=" gap-5 px-10  justify-center py-5 text-center space-y-2 lg:space-y-4">
            <h1 className="text-lg lg:text-2xl">Weather Search</h1>
            <div className="flex">
              <input
                value={city}
                onChange={handleInp}
                type="text"
                placeholder="Enter locations"
                className=" w-full h-8 text-center justify-center rounded-xl border border-slate-950 border-r-0 rounded-r-none  md:h-10 lg:h-12"
              />
              <button
                onClick={handleSubmit}
                className="h-8 border border-slate-950 rounded-xl rounded-l-none border-l-0   bg-black text-white text-sm px-5  md:px-8 lg:px-12 md:text-base lg:text-lg md:p-1 lg:p-2 md:h-10 lg:h-12"
              >
                Search
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
