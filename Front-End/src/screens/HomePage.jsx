import { Fragment } from "react";
import hero from "../components/assets/shoe-removebg-preview.png";
import "./HomePage.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <Fragment>
      <div className="header">
        <section className="hero">
          {/* left hero section here */}
          <div className="leftHero">
            <h1>TipTOp</h1>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p>
              The TIpTop is one of those classic tennis shoes that made it
              through summer and winter no matter the weather. First appeared in
              1976 as a prototype test-version with a release later in 1977
            </p>
            <a href="/men-shoe" className="btn">
              Buy Now
            </a>
          </div>
          {/* right hero section here */}
          <div className="rightHero">
            <img src={hero} alt="Adidas Forest Hill" />
          </div>

          
        </section>

        
      </div>
      
      


      
      </Fragment>
  );
};

export default HomePage;
