import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <nav className="w-full h-20 bg-gray-600 text-white flex justify-between gap-20 px-32 items-center text-2xl md:w-full md:h-20 md:px-20 ">
        <div className="links flex gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="dateTime flex gap-20">
          <div className="times"></div>
          <div className="dates">{}</div>
        </div>
      </nav>
    </>
  );
}
