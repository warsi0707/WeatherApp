import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <nav className="w-screen h-20 bg-gray-600 text-white flex justify-between gap-20 px-10 items-center text-xl md:text-2xl md:w-full md:h-20 md:px-20 ">
        <div className="links flex gap-10">
          <NavLink to="/" className=" hover:text-red-300">Home</NavLink>
          <NavLink to="/about" className=" hover:text-red-300">About Project</NavLink>
          {/* <NavLink to="/contact">Contact</NavLink> */}
        </div>
        
      </nav>
    </>
  );
}
