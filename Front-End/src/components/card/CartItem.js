import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  IconButton,
} from "@mui/material";
import DeleteForeverRounded from "@mui/icons-material/DeleteForeverRounded";
import data from "../../db/data";
import { useShopingCart } from "../../context/ShopingCartContext";

export default function CartItem({ id, quantity }) {
  const { removeItem, getNumberOfAllItems } = useShopingCart();
  const numberOfProducts = getNumberOfAllItems();
  const item = data.find((item) => item.id === id);
  if (item == null) return null;
  const { img, title, newPrice } = item;

  return (
    <div className="cart-container">
      <div className="cart-section">
        <div className="cart-history">
          <Card
            style={{
              backgroundColor: "transparent",
              color: "white",
              boxShadow: "0 1px 5px #e71fc4",
            }}
          >
            <CardActionArea className="card-action">
              <CardMedia
                component="img"
                height="150"
                width="50"
                alt={title}
                image={img}
              />
            </CardActionArea>
            <CardContent className="flexing">
              <div className="flex1">
                <Typography variant="body2" className="font">
                  {title}
                </Typography>
                <IconButton color="secondary" onClick={() => removeItem(id)}>
                  <DeleteForeverRounded fontSize="small" />
                </IconButton>
              </div>
              <div className="flex1">
                <Typography variant="body2" className="font">
                  ${newPrice * quantity}
                </Typography>
                <Typography variant="body2" className="font">
                  QTY:{quantity}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
