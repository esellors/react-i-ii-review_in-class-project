import React, { Component } from "react";
import "./App.css";
import NameInputOutput from "./Components/NameInputOutput";
import WhatIsMyPurpose from "./Components/WhatIsMyPurpose";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteTitle: "",
      name: "",
      page: 1
    };
    this.grabInput = this.grabInput.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    this.setState({ siteTitle: "Secrets? What secrets?" });
  }

  grabInput(evt) {
    this.setState({ name: evt.target.value });
  }

  changeView(evt) {
    this.setState({ page: +evt.target.name });
  }

  render() {
    const pageView = {
      1: (
        <NameInputOutput
          grabInput={this.grabInput}
          displayName={this.state.name}
        />
      ),
      2: <WhatIsMyPurpose />
    };

    return (
      <div className="App">
        <h1>{this.state.siteTitle}</h1>
        <button name="1" onClick={this.changeView}>
          View 1
        </button>
        <button name="2" onClick={this.changeView}>
          View 2
        </button>
        {pageView[this.state.page]}
      </div>
    );
  }
}
