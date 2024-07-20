import React from 'react'
import "./CSS/headerContent.css"
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import Buttons from "../Components/Buttons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import kameraContent from "../IMG/kamera.png";




const HeaderContent = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
 
  return (
<div className="header-content">
        <div className="header-social" data-aos="fade-right">
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
       
        <div className="header-content-text" data-aos="zoom-in">
          <h1>Aktan Film</h1> <br />
          <h3>Siluet 2029 ve Vazgeçme yayında!</h3>
          <p>Daha fazlası için..</p>
          <Buttons />
        </div>

        <div className="header-content-img" >
          <img src={kameraContent} alt="" />
        </div>
      </div>
  )
}

export default HeaderContent