import React from "react";

import "./App.css";
import Daily from "./components/Daily/Api";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hello World</h1>
        </header>
        <section>
          <Daily />
        </section>
      </div>
    );
  }
}

export default App;
