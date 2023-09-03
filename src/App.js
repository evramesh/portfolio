import { Component } from "react";
import Header from "./components/Navbar";
import Item from "./components/Items";
import Item2 from "./components/Item2";
import Item3 from "./components/Item3";
import Item4 from "./components/Item4";
import Item5 from "./components/Item5";
import Item6 from "./components/Item6";
import Item7 from "./components/Item7";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <div>
          <div className="profile">
            <Item />
          </div>
          <div className="test">
            <Item2 />
          </div>
          <div className="test">
            <Item3 />
          </div>
          <div className="test">
            <Item4 />
          </div>
          <div className="test">
            <Item5 />
          </div>
          <div className="test">
            <Item6 />
          </div>
          <div className="test">
            <Item7 />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
