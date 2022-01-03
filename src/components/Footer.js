import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import DehazeTwoToneIcon from '@material-ui/icons/DehazeTwoTone';
import cola from '../assets/cola.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
const Footer = () => {
  const [showlinks,setshowlinks]=useState(false);

  return(
    <div className="footer">
      <div className="lefts">
        <img src={cola}alt= "" class="ll"></img>
            
      </div>
      <div className="cent">
          <div className="links" id={showlinks ? "hidden" : ""}>
            <Link to="/About"className="a">
              <li>ABOUT US</li>
            </Link>
            <Link to="/events"className="a">
              <li>EVENTS</li>
            </Link> 
            <Link to="/team"className="a">
              <li>2021 BOARD</li>
            </Link> 
            <Link to="/joinus"className="a">
              <li>JOIN US</li>
            </Link>  

          </div>  
          <div className="om" onClick={() => setshowlinks(!showlinks)}><DehazeTwoToneIcon/></div> 
      </div>
        <div class="socials">
          <a href="https://www.instagram.com/rotaractclubpu"className="os">
            <InstagramIcon/>
          </a>
          <a href="https://www.facebook.com/Rotaract-club-of-Parul-University-1916878131667811/?ti=as" className="oy">
            <FacebookIcon/>
          </a>
        </div>
          
      
    </div>
  )
}
export default Footer;