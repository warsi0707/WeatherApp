export default function Home({ info }) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let d = new Date();
  let day = weekday[d.getDay()];
  const hours = d.getHours();
  const mnt = d.getMinutes();

  let amPm = hours < 12 ? "AM" : "PM";

  // let msg = (hours<12) ?"Good morning" : (hours>= 12 & hours <= 18) ? "Good evening" : "Good night"

  return (
    <>
      <div className="w-[500px] md:w-[700px] lg:w-[800px] md:mx-20 h-screen absolute top-1/3 md:absolute md:top-1/3 text-black p-5 my-5">
        <h1 className="flex gap-2 my-2 text-lg mx-12 md:text-xl lg:text-3xl md:mx-16 lg:mx-20">
          Result: <p className="font-bold">{info.city}</p>
        </h1>
        <section className="resultBar mx-20  md:my-10 lg:my-10 md:flex md:justify-between lg:flex lg:justify-between ">
          <div className="leftresult my-7 space-y-5 gap-5 justify-center">
            <h1 className=" text-5xl text-center md:text-6xl lg:text-6xl ">
              {info.temp}&deg;C
            </h1>
            <div className=" space-y-2  text-center text-lg  md:text-xl lg:text-xl">
              <h1>Humidity: {info.humidity}%</h1>
              <h1>Wind : {info.wind_speed} km/h</h1>
            </div>
          </div>
          <div className="rightResult text-center lg:text-end text-xl">
            <h1 className="font-bold text-2xl">Weather</h1>
            <div className="gap-3 md:flex lg:flex ">
              <h1>{day}</h1>
              <p>
                {hours}:{mnt} {amPm}
              </p>
            </div>
            <p>{info.description}</p>
          </div>
        </section>
      </div>
    </>
  );
}
