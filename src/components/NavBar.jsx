import React from "react";
const NavBar = () => {
  return (
    <>
      <nav className="flex  w-full h-auto p-6 items-center sticky justify-between px-36 bg-slate-400">
        <div className="flex gap-8 items-center ">
          <p className="font-bold text-2xl mr-10 ">Anushka</p>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Projects</p>
        </div>

        <div className="right gap-8 flex text-2xl">
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-github"></i>   
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
