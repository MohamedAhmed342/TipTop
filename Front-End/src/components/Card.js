// import { BsFillBagFill } from "react-icons/bs";

// import { useContext, useState } from "react";

// import { CartContext } from "../App";
import "./Card.css";
import { useShopingCart } from "../context/ShopingCartContext";
const Card = ({ id, img, title, star, reviews, prevPrice, newPrice }) => {
  const { getNumberOfItems, addToCart, deleteFromCart } = useShopingCart();
  const quantity = getNumberOfItems(id);
  // console.log(quantity);
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            {quantity ? (
              <>
                <button className="btn mins" onClick={() => deleteFromCart(id)}>
                  -
                </button>

                <span className="quantity">{quantity}</span>

                <button className="btn plus" onClick={() => addToCart(id)}>
                  +
                </button>
              </>
            ) : (
              <button className="btn" onClick={() => addToCart(id)}>
                Add to Cart
              </button>
            )}

            {/* <BsFillBagFill className="bag-icon" /> */}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
