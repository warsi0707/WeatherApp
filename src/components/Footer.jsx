export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <footer className="grid justify-center  p-2 h-32 text-center  items-center w-[350px] bg-gray-900 text-white text-md md:text-2xl md:w-full md:[500px] md:bottom-0 md:flex md:justify-evenly ">
        <div>
          <h1>Designed and Developed by Samir Warsi</h1>
        </div>
        <div>
          <h1>Copyright © {year} Samir</h1>
        </div>
        <div className=" flex gap-5 justify-center md:flex md:justify-center">
          {/* <Link to="https://github.com/warsi0707"> <GitHubIcon/></Link>
        <Link to="https://x.com/Samir_warsi2001"> <XIcon/></Link>
        <Link to="https://www.linkedin.com/in/samir-warsi/"> <LinkedInIcon/></Link>
        <Link to="#"> <InstagramIcon/></Link> */}
        </div>
      </footer>
    </>
  );
}
