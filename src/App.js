import React from "react";
import Home from "./component/Home";
// import NaviBar from "./component/NaviBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import AddProduct from "./component/AddProduct";
import ProductDetails from "./component/ProductDetails";
import Admin from "./component/Admin";
import Update from "./component/Update";
import Cart from "./component/Cart";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/Login">
              <Login />
            </Route>

            <Route path="/admin">
              <Admin />
            </Route>

            <Route path="/addProduct">
              <AddProduct />
            </Route>

            <Route path="/ProductDetails:id">
              <ProductDetails />
            </Route>

            <Route path="/updateprod:id">
              <Update />
            </Route>

            <Route path="/cartComp">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
