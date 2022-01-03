import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DehazeTwoToneIcon from '@material-ui/icons/DehazeTwoTone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import pu from '../assets/pu.png';
const Navbar = () => {
  const [showlinks,setshowlinks]=useState(false);

  return(
    <div className="navbar">
      <div className="leftside">
        
        <Link to=""className="b">
              <li><img src={pu}alt= "" class="lb"></img></li>
            </Link>
      </div>
      <div className="rightside">
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
          <div className="op" onClick={() => setshowlinks(!showlinks)}><MoreVertIcon/></div> 
      </div>
      
    </div>
  )
}
export default Navbar