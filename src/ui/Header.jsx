import Navbar from "./Navbar";
import { TiThMenu } from "react-icons/ti";
import Logo from "./Logo";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

function Header() {
  const [showNav, setShowNav] = useState(false);
  function handleToggle() {
    setShowNav(!showNav);
  }

  return (
    <div className="flex flex-row justify-between  w-full h-full sticky top-0 px-3 bg-[#202020]  text-[#fff] z-20 md:flex-row">
      <Logo />
      <div className="hidden md:block">
        <Navbar onChange={showNav} />
      </div>
      <div className="flex flex-col justify-end items-end my-3 gap-5 md:hidden ">
        <div>
        <button onClick={handleToggle}>
          {showNav ? <FaXmark /> : <TiThMenu />}
        </button>
        </div>
        <div>
        {showNav && (
        <div className="md:hidden">
          <Navbar />
        </div>
      )}
        </div>
      </div>

      
    </div>
  );
}

export default Header;
