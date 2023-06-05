import React from "react";
import { useRef } from "react";

function AddProduct() {
  let pic = useRef();
  let brand = useRef();
  let desc = useRef();
  let disPrice = useRef();
  let mrp = useRef();
  let colour = useRef();
  let fabric = useRef();
  let proType = useRef();
  let rating = useRef();

  // let handleOption = () => {
  //   let genderOptions = document.getElementsByName("gender");
  //   genderOptions.forEach((inp) => {
  //     if (inp.checked === true) {
  //     }
  //   });
  // };

  let handleSubmit = (e) => {
    e.preventDefault();

    let newProduct = {
      productPic      : pic.current.value,
      brand           : brand.current.value,
      description     : desc.current.value,
      discountprice   : disPrice.current.value,
      mrp             : mrp.current.value,
      color           : colour.current.value,
      fabric          : fabric.current.value,
      productType     : proType.current.value,
      usage           : "",
      rating          : rating.current.value,
      size            : [],
    };
    console.log(newProduct);
  };

  return (
    <div className="addProduct">
      <h1>Add The Product</h1> <hr />
      
      <form onSubmit={handleSubmit}>
        <label>Picture</label>                        <input type="url" ref={pic} />
        <label>Brand</label>                          <input type="text" ref={brand} />
        <label>Description</label>{" "}
                                                      <textarea cols="30" rows="10" ref={desc}></textarea>
        <label>Price after Discount</label>{" "}
                                                      <input type="number" ref={disPrice} />
        <label>MRP</label>                            <input type="number" ref={mrp} />
        <label>Colour</label>                         <input type="text" ref={colour} />
        <label>Fabric</label>                         <input type="text" ref={fabric} />
        <label>Product Type</label>                   <input type="text" ref={proType} />
        <label>Usage</label>{" "}                     <div>
                                                          <input type="radio" value="Male" name="gender" />
                                                          <label>Male</label>
                                                          <input type="radio" value="Female" name="gender" />
                                                          <label>Female</label>
                                                          <input type="radio" value="Others" name="gender" />
                                                          <label>Others</label>
                                                      </div>
        <label>Rating</label>{" "}
                                                    <input type="number" step={0.1} min="1" max={5} ref={rating} />
        <label>Size</label>{" "}                    <div>
                                                      <input type="checkbox" value="S" name="size" /> <label>S</label>
                                                      <input type="checkbox" value="M" name="size" /> <label>M</label>
                                                      <input type="checkbox" value="L" name="size" /> <label>L</label>
                                                      <input type="checkbox" value="XL" name="size" /> <label>XL</label>
                                                    </div>
       
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddProduct;
