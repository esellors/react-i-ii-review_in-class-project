import React, { Component } from "react";
import "./App.css";
import NameInputOutput from "./Components/NameInputOutput";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteTitle: '',
      name: ''
    };
    this.grabInput = this.grabInput.bind(this)
  }

  componentDidMount() {
    this.setState({ siteTitle: 'The Name Displayer' })
  }

  grabInput(evt) {
    this.setState({ name: evt.target.value })
  }

  render() {
    // console.log('App component has rendered')

    return (
      <div className="App">
        <h1>{this.state.siteTitle}</h1>
        <NameInputOutput 
          grabInput={this.grabInput}
          displayName={this.state.name} 
        />
      </div>
    );
  }
}
