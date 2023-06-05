import React,{ useEffect, useState } from "react";
import DisplayProduct from "./DisplayProduct";
import NaviBar from "./NaviBar";

const Cart = () => {
    let [cart , setCart] = useState([]);
    let [totalPrice , setTotalPrice] = useState(null);
 
 
     useEffect(()=> {
       let cartArray =   localStorage.getItem("cart");
       cartArray = JSON.parse(cartArray);
       setCart(cartArray);
      
       let t = cartArray.reduce((total ,v)=>{ return Number(v.discountPrice)+total} , 0)
        setTotalPrice(t+"Rupees");
     } , [])
     
     


 
 
     return ( 
        <div className="cartComp">
         <NaviBar/>
         <h1> cart page </h1>
 
         {totalPrice && <h1>{totalPrice}</h1>}
 
         <DisplayProduct products={cart}/>
         <button>Remove</button>
 
        </div> 
     );
}
 
export default Cart;