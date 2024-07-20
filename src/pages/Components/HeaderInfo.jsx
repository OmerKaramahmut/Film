import React, { useState } from 'react'
import './CSS/HeaderInfo.css'
import HomeIcon from "@mui/icons-material/Home";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from '@mui/icons-material/Menu';


const HeaderInfo = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <>
      <div className="headerMobileIcon" onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
       <MenuIcon/>
        </div>
    <div className="header-info" >
    <ul className= {menuOpen ? "open" : ""}>
      <li>
        <a href="/">
          <HomeIcon className="icon" />
          Ana Sayfa
        </a>
      </li>
      <li>
        <a href="/">
          <HelpOutlineIcon className="icon" /> Biz kimiz?
        </a>
      </li>
      <li>
        <a href="/">
          <CameraAltIcon className="icon" /> Filmlerimiz
        </a>
      </li>
      <li>
        <a href="/">
          <CallIcon className="icon" />
          İletişim
        </a>
      </li>
    </ul>
   
  </div>
  </>
  )
}

export default HeaderInfo