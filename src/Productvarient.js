import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#FFFFFF",
    border: "none",
    background: " #1277BA",
    width: "250px",
    [theme.breakpoints.up("sm")]: {
      width: "562px",
      height: "36px",
    },
    height: "30px",
    textTransform: "capitalize",
    borderRight: "5px",
  },
}));

function Productvarient() {
  const classes = useStyles();
  const [count, setcount] = useState(1);
  function decrementCount() {
    setcount((prevcount) => prevcount - 1);
  }
  function incrementCount() {
    setcount((prevcount) => prevcount + 1);
  }
  const [products, setProducts] = useState([
    {
      id: 1,
      varientname: ["Stainless steel", "Black stainless steel"],
      src: [
        "https://images-na.ssl-images-amazon.com/images/I/71DuofqGR8L._SX466_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71DuofqGR8L._SX466_.jpg",
      ],
      count: 1,
    },
  ]);

  const [index, setindex] = useState(0);
  const myRef = useRef();

  const handleChange = (index) => {
    setindex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  return (
    <div className="app">
      {products.map((item) => (
        <div className="item-details" key={item.id}>
          <div className="item-color">
            <span>Color: </span>
            <span>{item.varientname[index]}</span>
          </div>
          <div className="item-box" ref={myRef}>
            {item.src.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                onClick={() => handleChange(index)}
              />
            ))}
          </div>
          <div className="item-name">
            {item.varientname.map((varient, index) => (
              <div key={index}>
                <span>{varient}</span>
              </div>
            ))}
          </div>
          <div className="btn">
            <div className="qtyControl">
              <button onClick={decrementCount}>-</button>
              <button>{count}</button>
              <button onClick={incrementCount}>+</button>
            </div>
            <div className="addToCart">
              <Button
                variant="contained"
                color="primary"
                classes={{ root: classes.root }}
                startIcon={<AddShoppingCartIcon />}
              >
                Add To Cart
              </Button>
            </div>
          </div>
          <div className="item_footer">
            <div className="item_details_footer">
              <LocalShippingIcon
                style={{ color: "orange", fontSize: 30 }}
                className="truck_icon"
              />
              <h5>
                Due to nationalwide supply constraints, this item delivers
                within
                <b> 4 to 6 weeks</b>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productvarient;
