import React from "react";
import { Link } from "react-router-dom";

function NaviBar() {
  return (
    <div>
      <div id="BlueNavBar">
        <div id="logoTab">
          <img
            id="flogo"
            width={75}
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="no-img"
          />
          <br />
          <a href="..." id="explore">
            Explore
          </a>
          
          <a href="..." id="plus">Plus</a>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
            alt="noImage"
            height={15}
          />
        </div>
        <div id="searchTab">
          <input
            id="seaBar"
            type="text"
            title="Search for products, brands and more"
            placeholder="Search for products, brands and more"
            value="..."
          ></input>
          <button id="serButton" type="submit">
            <img id="searchimg"
              width={25}
              height={25}
              src="https://www.clipartmax.com/png/small/15-150759_search-icon-search-icon-png-blue.png"
              alt="no-img"
            />
          </button>
        </div>
        <div>
          <a href="/Login" id="loginTab">
            Login
          </a>
        </div>
        <div>
          <Link to="/admin" id="BecomeSeller">
            Become a seller
          </Link>
        </div>
        <div>
          <a href="..." id="more">
            More
          </a>
        </div>
        <div id="button">
          
          <a id="cart" href="/cartComp">
            <img id="cartimg"
            src="https://img.icons8.com/sf-regular-filled/2x/shopping-cart.png"
            height={30}
            alt="noImage"
          />Cart
          </a>
        </div>
      </div>

      <div id="categoryBar">
        <div id="topOffers">
          <a href="..." >
            <div>
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                alt="Top offers"
                height={64}
                width={64}
              />
            </div>
            <div id="TO">Top Offers</div>
          </a>
        </div>
        <div id="grocery">
          <a href="...">
            <div>
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                alt="Grocery"
                height={64}
                width={64}
              />
            </div>
            <div id="Gr">Grocery</div>
          </a>
        </div>
        <div id="mobiles">
          <a href="...">
            <div>
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                alt="Mobiles"
                height={64}
                width={64}
              />
            </div>
            <div id="Mo">Mobiles</div>
          </a>
        </div>
        <div id="fashion">
          <a href="...">
            <div>
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
                alt="Fashion"
                height={64}
                width={64}
              />
            </div>
            <div id="Fa">Fashion</div>
          </a>
        </div>
        <div id="electronics">
          <a href="...">
            <div>
              <img
                src="	https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                alt="Electronics"
                height={64}
                width={64}
              />
            </div>
            <div id="El">Electronics</div>
          </a>
        </div>
        <div id="home">
          <a href="...">
            <div>
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                alt="Home"
                height={64}
                width={64}
              />
            </div>
            <div id="Ho">Home</div>
          </a>
        </div>
        <div id="appliances">
          <a href="...">
            <div>
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                alt="Appliances"
                height={64}
                width={64}
              />
            </div>
            <div id="Ap">Appliances</div>
          </a>
        </div>
        <div id="travel">
          <a href="...">
            <div>
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
                alt="Travel"
                height={64}
                width={64}
              />
            </div>
            <div id="Tr">Travel</div>
          </a>
        </div>
        <div id="beauty,toys&more">
          <a href="...">
            <div>
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                alt="Beauty,toys & more"
                height={64}
                width={64}
              />
            </div>
            <div id="BTM">Beauty,toys & more</div>
          </a>
        </div>
        <div id="twowheelers">
          <a href="...">
            <div>
              <img
                src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
                alt=""
                height={64}
                width={64}
              />
            </div>
            <div id="TW">Two Wheelers</div>
          </a>
        </div>
      </div>

      
    </div>
  );
}
export default NaviBar;
