import { useParams } from "react-router-dom";
import React from "react";
import useFetch from "./useFetch";
import load from "../component/DataBase/load_icon.png"

const ProductDetails = () => {
  let { id } = useParams();

  let { data: product, pending, error } = useFetch(`http://localhost:4000/products/${id}`);

  let handleCart = ()=>{

    let cartArray = localStorage.getItem("cart");
    cartArray = JSON.parse(cartArray);

    let present = cartArray.some((item)=>{return item.id === product.id})

    if(present === false)
    {
     cartArray.push(product);
     cartArray = JSON.stringify(cartArray);
     localStorage.setItem("cart" , cartArray)
     alert("item has been added to the cart");
    }
    else
    {
     alert("item already been added")
    }
 }

  return (
    <div>
      <h1>Product Details</h1> <hr />

      {error && <h2>{error}</h2>}
      {pending === true && (
        <img src={load} alt="Page Not Found" className="loader" />
      )}
      {product && (
        <div className="seperate1Prod">
          <br />
            <img src={product.productPic} alt="not found" id="image" />
            <h2> Brand:{product.brand} </h2>
            <h3>Description:{product.descripton} </h3>
            <h2>Price :{product.discountPrice} </h2>
            <h5>{product.mrp} </h5>
            <span>Colour:{product.color} </span>
            <h5>Fabric:{product.fabric} </h5>
            <h5>Type:{product.productType} </h5>
            <span>For:{product.usage} </span>
            <span>Ratings:{product.rating} </span>
            <h5>Size:{product.size} </h5>
        </div>
      )}
    <br /><br />
    <button onClick={()=>{handleCart()}}>Add To Cart</button>

    </div>
  );
};
export default ProductDetails;
