import "./navbarLogin.css";


import logo from "./../../../Assets/Image/logo1.png";

import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Nav, Navbar } from "react-bootstrap";
import { Login, ShoppingCart } from "@mui/icons-material";

function NavbarLogin() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar fixed="top" className="navbars">
      <nav className="containers">
        <a className="logo" href="/">
          <img className="logo-img" src={logo} alt="" />
          <div className="logo-title">Hello</div>
        </a>
        
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon className="menu-icon" />
        </div>


        <ul className={menuOpen ? "menuOpen" : "open"}>

          <div className="search-box">
            <input 
                type="search" 
                placeholder="Search Here..." 
            />
            <div className="btn-btn">
               <SearchIcon className="search-icon"/>
            </div>
          </div>

          <div className="links d-flex align-items-center ">
              <li>
                <Nav.Link  href="/login" className="d-flex align-items-center gap-2">
                <Login className="icon"/>
                  Login
                  </Nav.Link>
              </li>

              <li>
              <Nav.Link  href="/cart" className="d-flex align-items-center gap-2">
                <ShoppingCart className="icon"/>
                  cart
                  </Nav.Link>
              </li>


          </div>
        

          

        </ul>
          </nav>
    </Navbar>
  );
}

export default NavbarLogin;
