import React, { Component } from "react";
import { Col, Row, Container, Card, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "../css/Product.css";
import { Box } from "@material-ui/core";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.props.products.map((product) => {
              return (
                <Col key={product.id} md="4">
                  <Card top>
                  <Box sx={{ textAlign: "center" }}>
                      <Grid>
                        <div className="card" key={product.id}>
                          <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt="" />
                          </Link>
                        </div>
                      </Grid>
                      </Box>
                      <Box sx={{  m: 1 }}>
                      <Grid>
                        <h5>{product.title}</h5>
                        <h5>{product.price} TL</h5>
                      </Grid>
                      </Box>
                      <Box sx={{ textAlign: "center" }}>
                      <Grid>
                        <Button onClick={() => this.props.addToCart(product)}>
                          Add to Cart
                        </Button>
                      </Grid>
                      </Box>
                 
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
