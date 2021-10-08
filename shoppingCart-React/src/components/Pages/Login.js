import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import alertify from "alertifyjs";
import { Grid, Box } from "@material-ui/core";
import { Card, CardImg } from "reactstrap";
export default class Login extends Component {
  state = { cart: [], email: "", password: "" };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " Added!");
    alertify.success(this.state.password + " Added!");
  };
  render() {
    return (
      <div>
        <Container >
          <Grid container spacing={2}>
          <Grid item xs={4}>
              <Box sx={{ textAlign: "center", m: 3 }}>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=338&ext=jpg"
                    alt="Card image cap"
                  />
                </Card>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box sx={{ textAlign: "center", m: 3 }}>
                <h3 style={{ color: "#50809B" }}>Welcome Back</h3>
              </Box>
              <Box sx={{ m: 3 }}>
                <h5 style={{ color: "#50809B" }}>Login with email</h5>
              </Box>
              <Box sx={{ m: 3 }}>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                   <br/>
                  <Button type="submit" color="success">Login</Button>
                </Form>
              </Box>
            </Grid>
           
          </Grid>
        </Container>
      </div>
    );
  }
}
