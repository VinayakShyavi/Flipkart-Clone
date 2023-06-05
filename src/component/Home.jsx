import React,{useEffect} from "react";
import DisplayProduct from "./DisplayProduct";
import NaviBar from "./NaviBar";
import useFetch from "./useFetch";
import load from "../component/DataBase/load_icon.png"

const Home=()=>{

let {data:products, pending, error} = useFetch("http://localhost:4000/products")

useEffect(()=>{

    if(localStorage.getItem("cart") == null)
    {
      localStorage.setItem("cart" , "[]")
    }

  } , [] )
    
    return (
        
        <div className="home">
            <NaviBar/>
        {error && <h2>{error}</h2>}
        {pending===true && <img src={load} alt="Page Not Found" className="loader"/>} 
        {pending === true && <h1 className="loading">Loading........</h1> }
          
        {products && <DisplayProduct products={products} title="All products"/>}

        </div>
    )
}
export default Home;