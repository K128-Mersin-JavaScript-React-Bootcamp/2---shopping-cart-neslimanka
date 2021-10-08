import React from "react";
import { Route } from "react-router";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Shop from "./Pages/Shop";
import Stories from "./Pages/Stories";
import About from "./Pages/About";
import Cart from "./Pages/Cart";

export class Section extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/ecommerce" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
      </div>
    );
  }
}

export default Section;
