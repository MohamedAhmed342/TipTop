import * as React from "react";

import logo from "../assets/logo.png";
import "./Navbar.css";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useUIContext } from "../context/";


// Navbar Component
const Navbar = ({ handleInputChange, query }) => {
  const [navbar] = useState(false);
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setDrawerOpen, setShowSearchBox } = useUIContext();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className={navbar ? "active" : ""}>
        <div className="container">
          <div>
            <a href="/">
            <img src={logo} alt="" className="logo" />
            </a>
            <div className="menu">
              <ul>
                <li>
                <Link to='/'>Home</Link>
            
                </li>
                <li>
            <Link to='/men-shoe'>Men</Link>
            
                </li>
                <li>
              
            <Link to='/women-shoe'>Women</Link>
               </li>
                <li>
           
            <Link to='/kids-shoe'>Kids</Link>         
                   </li>
              </ul>
            </div>
            <div>

              
              <form>
                <div className="search-icon">
                  <FaSearch />
                </div>

                <input
          className="search"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search"
        />
                <button
                  className="nav-btn"
                  onClick={() => {
                    toast.warn("Cart is Empty BUY NOW !", {
                      position: "bottom-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      theme: "colored",
                    });
                  }}
                >
                  <FaCartPlus />
                </button>


                {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to="./signin"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to="./signup"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
                <Link to="./signin"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleClose}>Register</MenuItem>
                </Link>
              </Menu>
            </div>
          )}





                {/* <Link to="./signin"> 
                <button
                  className="nav-btn" 
                  onClick={() => {
                    toast.warn("Login", {
                      position: "bottom-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      theme: "colored",
                    });
                  }}
                >
                  <FaUserCircle />
                </button>
                </Link> */}

              </form>
            </div>
          </div>
          <div className="menu-btn">{/* <FaBars Toggle={Toggle}/> */}</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
