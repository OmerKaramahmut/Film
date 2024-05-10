import "./Header.css";
import HeaderInfo from "../Components/HeaderInfo";
import HeaderContent from "../Components/HeaderContent";
import { useState } from "react";
import kameraLogo from "../UI/kameralogoyeni.png";


const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <header className="header">
      <div className={navbar ? "header-top active" : "header-top"}>
        <div className="header-logo">
          <a href="/">Aktan Film </a> 
          <img className="kameraHover" src={kameraLogo} alt="" />
        
        </div>
       
        <HeaderInfo />
      </div>
      <HeaderContent />
    </header>
  );
};

export default Header;
