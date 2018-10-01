// Core
import React from "react";

// Components
import Slider from "./slider/slider";

class App extends React.Component {
  render() {
    return (

      <main>
        <h1 tabIndex="1">Card Slider Demo</h1>
        <Slider maxShow={3} tabIndex="3" />
      </main>

    );
  }
}

export default App;
