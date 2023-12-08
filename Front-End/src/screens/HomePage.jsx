import { Fragment } from "react";
import hero from "../components/assets/shoe-removebg-preview.png";
import "./HomePage.css";
import gir1 from "../components/assets/gir_dp2.jpg";
import girl2 from "../components/assets/gir_dp3.jpg";
import girl3 from "../components/assets/girl_dp1.jpg";
import man from "../components/assets/man_dp1.jpg";
import man2 from "../components/assets/man_dp2.jpg";
import man3 from "../components/assets/man_dp3.jpg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <Fragment>
      <div className="header">
        <section className="hero">
          {/* left hero section here */}
          <div className="leftHero">
            <h1>TipTop</h1>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis, amet nesciunt voluptatem cum architecto ipsum vero
                  nulla voluptatibus dolorum modi assumenda eum? Aliquid
                  inventore velit ipsa repellat numquam atque dolores!
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis, amet nesciunt voluptatem cum architecto ipsum vero
                  nulla voluptatibus dolorum modi assumenda eum? Aliquid
                  inventore velit ipsa repellat numquam atque dolores!
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis, amet nesciunt voluptatem cum architecto ipsum vero
                  nulla voluptatibus dolorum modi assumenda eum? Aliquid
                  inventore velit ipsa repellat numquam atque dolores!
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis, amet nesciunt voluptatem cum architecto ipsum vero
                  nulla voluptatibus dolorum modi assumenda eum? Aliquid
                  inventore velit ipsa repellat numquam atque dolores!
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis, amet nesciunt voluptatem cum architecto ipsum vero
                  nulla voluptatibus dolorum modi assumenda eum? Aliquid
                  inventore velit ipsa repellat numquam atque dolores!
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Debitis, amet nesciunt voluptatem cum architecto ipsum vero
                  nulla voluptatibus dolorum modi assumenda eum? Aliquid
                  inventore velit ipsa repellat numquam atque dolores!
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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>

            <div class="services_box">
              <i class="fa-solid fa-rotate-left"></i>
              <h3>10 Days Replacement</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>

            <div class="services_box">
              <i class="fa-solid fa-headset"></i>
              <h3>24 x 7 Support</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
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
              <a href="#" class="center">
                Sri Lanka
              </a>
              <a href="#" class="center">
                USA
              </a>
              <a href="#" class="center">
                India
              </a>
              <a href="#" class="center">
                Japan
              </a>
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
