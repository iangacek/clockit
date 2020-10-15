// React
import React, { Fragment } from "react";

// Styles
import "../assets/styles/App.styl";

// Components
import Nav from "./Nav";
import Clock from "./Clock";
import WorldClocks from "./WorldClocks";

class App extends React.Component {
  constructor() {
    super();
    const tiempo = new Date();
    // console.log(tiempo);
    this.state = { time: tiempo };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000);
  }

  render() {
    let bogotaTime = this.state.time.toLocaleString("en-US", {
      timeZone: "Europe/London",
    });
    // return <Nav />;
    return (
      <>
        <Nav />
        <Clock time={this.state.time} />
        <WorldClocks time={this.state.time} />
      </>
    );
  }
}

export default App;
