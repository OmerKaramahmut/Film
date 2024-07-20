import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import kameraLogo from "./IMG/kameralogoyeni.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <div className="footerLogoContent">
          <div className="footerLogoText">Aktan Film</div>
          <div className="footerImg">
            <img className="kameraHover" src={kameraLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="footerContent">
        <div className="footerMenu">
          <ul>
            <h4>Menü</h4>
            <li>
              <a href="/">Ana Sayfa</a>
            </li>
            <li>
              <a href="/">Biz kimiz?</a>
            </li>
            <li>
              <a href="/">Filmlerimiz</a>
            </li>
            <li>
              <a href="/">İletişim</a>
            </li>
          </ul>
        </div>
        <div className="footerMenu">
          <ul>
            <h4>Stüdyolarımız</h4>
            <li>
              <a href="/">İstanbul</a>
            </li>
            <li>
              <a href="/">İzmir</a>
            </li>
            <li>
              <a href="/">Diyarbakır</a>
            </li>
            <li>
              <a href="/">Ankara</a>
            </li>
          </ul>
        </div>
        <div className="footerMenu">
          <ul>
            <h4>Filmlerimiz</h4>
            <li>
              <a href="/">Vazgeçme</a>
            </li>
            <li>
              <a href="/">Sliuet 2029</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerIcons">
        {" "}
        <div className="header-social">
          <a href="">
            <InstagramIcon className="header-social-icon" />
          </a>
          <a href="">
            <XIcon className="header-social-icon" />
          </a>
          <a href="">
            <FacebookIcon className="header-social-icon" />
          </a>
          <a href="">
            <EmailIcon className="header-social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
