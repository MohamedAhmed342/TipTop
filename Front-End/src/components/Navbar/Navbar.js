import * as React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useShopingCart } from "../../context/ShopingCartContext";

const Navbar = ({ handleInputChange, query }) => {
  const [navbar] = useState(false);
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { getNumberOfAllItems } = useShopingCart();
  const quantity = getNumberOfAllItems();

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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/men-shoe">Men</Link>
                </li>
                <li>
                  <Link to="/women-shoe">Women</Link>
                </li>
                <li>
                  <Link to="/kids-shoe">Kids</Link>
                </li>
              </ul>
            </div>
            <div>
              <form>
                <div className="search-icon">
                  <FaSearch />
                </div>

                <input type="text" onChange={handleInputChange} value={query} />
                <div className="number-quintity">
                  <Link to="/cart">
                    <span>{quantity}</span>
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
                  </Link>
                </div>

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
                      <Link
                        to="./userprofile"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                      </Link>
                      <Link
                        to="./signup"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleClose}>Register</MenuItem>
                      </Link>
                      <Link
                        to="./signin"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <MenuItem onClick={handleClose}>Login</MenuItem>
                      </Link>
                    </Menu>
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="menu-btn"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
