import React from "react";
import { Link } from "react-router-dom";

function DisplayProduct({ title, products }) {
  return (
    <div className="products">
      <h2>{title}</h2>
      <div className="displayProd">
        {products.map((product) => {
          return (
            <div className="ProdInOneDiv">
              <br />
              <Link to={`/ProductDetails${product.id}`}>
              <img src={product.productPic} alt="not found" id="image" />
              <h2> Brand:{product.brand} </h2>
              <h3>Description:{product.description} </h3>
              <h2>Price :{product.discountPrice} </h2>
              <h5>MRP:{product.mrp} </h5>
              <span>Colour:{product.color} </span>
              <h5>Fabric:{product.fabric} </h5>
              <h5>Type:{product.productType} </h5>
              <span>For:{product.usage} </span>
              <span>Ratings:{product.rating} </span>
              <h5>Size:{product.size} </h5>
              </Link>
            
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DisplayProduct;
