import "../componentsp/producte.css";
import React from "react";

const Compo = ({ item, handleClick }) => {

    const { title, price, img } = item;
    return (
      <div className="cards">
        <div className="image_box">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>Price - {price}$</p>
          <button className="buttoni" onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    );
  };

export default Compo;