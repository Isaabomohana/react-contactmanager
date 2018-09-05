import React, { Component } from "react";
import Contact from "./components/Contact";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Contact name="MrIsa" email="mrisa@me.me" mob="123-123-4444" />
          <Contact name="Isa" email="isa@me.me" mob="123-123-5555" />
        </div>
      </div>
    );
  }
}

export default App;
