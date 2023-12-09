import React from "react";
import "./CartPage.css";
import { useShopingCart } from "../context/ShopingCartContext";
import CartItem from "../components/CartItem";
import data from "../db/data"
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Button,
  IconButton,
} from "@mui/material";

export default function CartPage() {
  const {  getNumberOfAllItems ,cartItems,getConfirm} = useShopingCart();
  const numberOfProducts = getNumberOfAllItems();

  const getTotal = () => {
    return cartItems.reduce((total, cartItem) => {
      const item = data.find((i) => i.id === cartItem.id);
      const itemPrice = item?.newPrice || 0;
      return total + itemPrice * cartItem.quantity;
    }, 0);
  };

  return (
    
    <div className="CartPage">
       <Typography
        style={{ marginTop: "10px", color:"white",
       }}
        variant="h4"
      
        align="center"
        gutterBottom
      >
        Your Cart
      </Typography>
      
      {cartItems
        .filter((item) => item.quantity > 0)
        .map((item) => {
          return <CartItem key={item?.id} {...item} />;
        })}
        
         <div className="cart-summeryy">
          
          <Card style={{ backgroundColor:  "transparent", color: 'white', boxShadow: '0 1px 5px #e71fc4' }} >
            <CardContent >
              
              <Typography className="font" variant="h5" gutterBottom>
                ORDER SUMMERY
              </Typography>
              <div className="flex1">
                <Typography gutterBottom variant="body2" className="font">
                  {numberOfProducts}  ITEMS
                </Typography>
                <Typography gutterBottom variant="body2" className="font">
                  ${getTotal()}
                </Typography>
              </div>
              <div className="flex1">
                <Typography gutterBottom variant="body2" className="font">
                  DELEVERY
                </Typography>
                <Typography gutterBottom variant="body2" className="font">
                  FREE
                </Typography>
              </div>
              <div className="flex1">
                <Typography gutterBottom variant="body2" className="font">
                  SALES TAX
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  className="font"
                ></Typography>
              </div>
              <div className="flex1">
                <Typography gutterBottom variant="body2" className="font">
                  TOTAL
                </Typography>
                <Typography gutterBottom variant="body2" className="font">
                  ${getTotal() }
                </Typography>
              </div>
              <Button
                style={{ marginTop: "30px", width: "100%" }}
                size="small"
                className="font"
                variant="contained"
                color="secondary"
                onClick={() => {
                  getConfirm();
                }}
              >
                CHECKOUT
              </Button>
            </CardContent>
          </Card>
        </div>
    </div>
    
  );
}
