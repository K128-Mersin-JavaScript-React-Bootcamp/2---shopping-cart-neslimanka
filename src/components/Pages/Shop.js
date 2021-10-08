import React, { Component } from "react";
import alertify  from "alertifyjs";
import { Container, Row, Col } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import CategoryList from "../CategoryList";
import ProductList from "../ProductList";
import CartList from "../CartList";
import Login from "./Login";
import Home from "./Home";
import "../../css/Product.css"


export default class Shop extends Component {
  state={ currentCategory: "", products: [], cart: [],rate:[] };


  componentDidMount() {
    this.getProducts();
  }
  
  getRate = (categoryId) => {
    let url = "http://localhost:3000/products";
   
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ rate: data }));
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
      addedItem.price = addedItem.price + addedItem.price;
    } else {
      newCart.push({ product: product, quantity: 1, price: product.price });
    }

    this.setState({ cart: newCart });
    alertify.success(product.title + " added to cart!");
  };
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.title + " removed from cart!");
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
         <Container>
         
         <Row>
           <Col xs="2">
             <CategoryList
               currentCategory={this.state.currentCategory}
               changeCategory={this.changeCategory}
               info={categoryInfo}
             />
          
           </Col>
           <Col xs="8">
               
             <Switch>
               <Route
                 
                 path="/"
                 render={(props) => (
                   <ProductList
                     {...props}
                     products={this.state.products}
                     addToCart={this.addToCart}
                     currentCategory={this.state.currentCategory}
                     rate={this.state.rate}
                     info={productInfo}
                   />
                 )}
               />
                <Route
                 exact
                 path="/cart"
                 render={props => (
                   <CartList
                     {...props}
                     cart={this.state.cart}
                     removeFromCart={this.removeFromCart}
                     addToCart={this.addToCart}
                   />
                 )}
               />
               <Route exact path="/login" component={Login}></Route>
               
               <Route exact path="/" component={Home} />
             </Switch>
           </Col>
           <Col xs="2">
           <CartList 
               cart={this.state.cart}
               removeFromCart={this.removeFromCart}
             />
           </Col>
         </Row>
       </Container>
      </div>
    );
  }
}
