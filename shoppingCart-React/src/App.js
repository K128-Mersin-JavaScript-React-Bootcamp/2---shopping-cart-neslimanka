import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navi from "./components/Navi";
import Section from "./components/Section";
import Footer from "./components/Footer";


class App extends React.Component {
  render() {
    return (
     
        <div>
          <Router>
            <Navi />
            <Section />
            <Footer />
          </Router>
        </div>
      
    );
  }
}

export default App;
