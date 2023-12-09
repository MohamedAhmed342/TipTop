import { Fragment } from "react";
import hero from "../components/assets/shoe-removebg-preview.png";
import "./HomePage.css";
import gir1 from "../components/assets/gir_dp2.jpg";
import girl2 from "../components/assets/gir_dp3.jpg";
import girl3 from "../components/assets/girl_dp1.jpg";
import man from "../components/assets/man_dp1.jpg";
import man2 from "../components/assets/man_dp2.jpg";
import man3 from "../components/assets/man_dp3.jpg";
import manshoes from "../components/assets/man4.jpg";
import womanshoes from "../components/assets/woman.jpg";
import kidshoes from "../components/assets/kid.jpg";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <div className="header">
        <section className="hero">
          {/* left hero section here */}
          <div className="leftHero">
            <h2>NEW COLLECTION </h2>
            <h1>BEST</h1>
            <h1 className="shoes">SHOES</h1>
            {/* <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div> */}
            <p className="title">
              OUR CHOICE OF MEN'S AND WOWEN AND KIDS RUNNING TRAINERS
            </p>
            <br></br>
            <p>
              The TipTop is one of those classic tennis shoes and we offering
              the best level of comfort, style , and attention to detail for
              years.
            </p>
            <a href="/men-shoe" className="btn">
              Shop Now
            </a>
          </div>
          {/* right hero section here */}
          <div className="rightHero">
            <img src={hero} alt="Adidas Forest Hill" />
          </div>
        </section>

        <section className="cardd">
       
          <div >
            <Link className="image-container" to="/men-shoe">
              <img className="iman" src={manshoes} alt="for men" />
              <span className="tex">
                Shoes For Men OF All Types, Sizes, Colors And Various Brands
              </span>
              <div className="overlay">
                <button className="overlay-button">MEN</button>
              </div>
            </Link>

            <Link className="image-container" to="/women-shoe">
              <img className="iman" src={womanshoes} alt="for men" />
              <span className="tex">
                Shoes For Women OF All Types, Sizes, Colors And Various Brands
              </span>
              <div className="overlay">
                <button className="overlay-button">WOMEN</button>
              </div>
            </Link>

            <Link className="image-container" to="/kids-shoe">
              <img className="iman" src={kidshoes} alt="for men" />
              <span className="tex">
                Shoes For Kids OF All Types, Sizes, Colors And Various Brands
              </span>
              <div className="overlay">
                <button className="overlay-button">KIDS</button>
              </div>
            </Link>
          </div>
        </section>

        <div class="review" id="Review">
          <h1>
            Customer's<span>review</span>
          </h1>

          <div class="review_box">
            <div class="review_card">
              <div class="card_top">
                <div class="profile">
                  <div class="profile_image">
                    <img src={gir1} />
                  </div>

                  <div class="name">
                    <strong>Ranidi Lochana</strong>

                    <div class="like">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment">
                <p>
                  I love my new running shoes! They're so comfortable and
                  provide excellent support. The quality is top-notch, and they
                  look great too. Highly recommend!"
                </p>
              </div>
            </div>

            <div class="review_card">
              <div class="card_top">
                <div class="profile">
                  <div class="profile_image">
                    <img src={girl2} />
                  </div>

                  <div class="name">
                    <strong>Sayuru Tharanga</strong>

                    <div class="like">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment">
                <p>
                  These sandals are a game-changer! Super comfortable for long
                  walks, and the design is trendy. The sizing was accurate
                </p>
              </div>
            </div>

            <div class="review_card">
              <div class="card_top">
                <div class="profile">
                  <div class="profile_image">
                    <img src={man} />
                  </div>

                  <div class="name">
                    <strong>Senuda Dilwan</strong>

                    <div class="like">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment">
                <p>
                  I needed to exchange a pair due to sizing, and the return
                  process was a breeze. Hassle-free returns and excellent
                  customer support.
                </p>
              </div>
            </div>
          </div>

          <div class="review_box">
            <div class="review_card">
              <div class="card_top">
                <div class="profile">
                  <div class="profile_image">
                    <img src={girl3} />
                  </div>

                  <div class="name">
                    <strong>Kaveesha Vidurangi</strong>

                    <div class="like">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment">
                <p>
                  Found the perfect pair of formal shoes for a special occasion.
                  The craftsmanship is exceptional, and they added a touch of
                  elegance to my outfit
                </p>
              </div>
            </div>

            <div class="review_card">
              <div class="card_top">
                <div class="profile">
                  <div class="profile_image">
                    <img src={man3} />
                  </div>

                  <div class="name">
                    <strong>John Deo</strong>

                    <div class="like">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment">
                <p>
                  Had a fantastic experience with customer service. They were
                  quick to respond to my questions and resolved an issue with my
                  order promptly.
                </p>
              </div>
            </div>

            <div class="review_card">
              <div class="card_top">
                <div class="profile">
                  <div class="profile_image">
                    <img src={man2} />
                  </div>

                  <div class="name">
                    <strong>Charith Aruna</strong>

                    <div class="like">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment">
                <p>
                  Love the frequent promotions! I got a great deal on a
                  high-quality pair of shoes. The affordability without
                  compromising on quality is what keeps me coming back.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="services">
          <h1>
            our<span>services</span>
          </h1>

          <div class="services_cards">
            <div class="services_box">
              <i class="fa-solid fa-truck-fast"></i>
              <h3>Fast Delivery</h3>
              <br />
              <br />
              <br />
              <br />
            </div>

            <div class="services_box">
              <i class="fa-solid fa-rotate-left"></i>
              <h3>10 Days Replacement</h3>
              <br />
              <br />
              <br />
              <br />
            </div>

            <div class="services_box">
              <i class="fa-solid fa-headset"></i>
              <h3>24 x 7 Support</h3>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <footer>
          <div class="footer_main">
            <div class="tag">
              <h1>Contact</h1>
              <a href="#">
                <i class="fa-solid fa-house"></i>123/Colombo/Sri Lanka
              </a>
              <a href="#">
                <i class="fa-solid fa-phone"></i>+94 12 345 6789
              </a>
              <a href="#">
                <i class="fa-solid fa-envelope"></i>contact@gmail.com
              </a>
            </div>

            <div class="tag">
              <h1>Get Help</h1>
              <a href="#" class="center">
                FAQ
              </a>
              <a href="#" class="center">
                Shipping
              </a>
              <a href="#" class="center">
                Returns
              </a>
              <a href="#" class="center">
                Payment Options
              </a>
            </div>

            <div class="tag">
              <h1>Our Stores</h1>
              <a class="center">Sri Lanka</a>
              <a class="center">USA</a>
              <a class="center">India</a>
              <a class="center">Japan</a>
            </div>

            <div class="tag">
              <h1>Follow Us</h1>
              <div class="social_link">
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default HomePage;
