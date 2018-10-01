// Core
import React from "react";

// Components
import Desktop from "./utils/responsive/desktop";
import Mobile from "./utils/responsive/mobile";
import Slider from "./slider/slider";

class App extends React.Component {
  render() {
    return (

      <main>
        <h1 tabIndex="1">Card Slider Demo</h1>
        <Mobile>
          <Slider show={1} tabIndex="3" />
        </Mobile>
        <Desktop>
          <Slider show={3} tabIndex="3" />
        </Desktop>
      </main>

    );
  }
}

export default App;
