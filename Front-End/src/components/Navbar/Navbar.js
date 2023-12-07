import logo from "../assets/logo.png";
import "./Navbar.css";
import { FaCartPlus, FaSearch,FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link } from 'react-router-dom';


// Navbar Component
const Navbar = ({ handleInputChange, query }) => {
  const [navbar] = useState(false);

 

  return (
    <>
      <nav className={navbar ? "active" : ""}>
        <div className="container">
          <div>
            <img src={logo} alt="" className="logo" />
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
                <Link to="./signin"> 
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
                </Link>

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
