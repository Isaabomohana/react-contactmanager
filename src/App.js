import React, { Component } from "react";
import Contact from "./components/Contact";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact name="MrIsa" email="mrisa@me.me" mob="123-123-4444" />
      </div>
    );
  }
}

export default App;
