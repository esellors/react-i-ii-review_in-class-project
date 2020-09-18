import React from "react";

export default class NameInputOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: "I like pineapples on pizza!",
      showSecret: false
    };
  }

  componentDidUpdate(prevProps) {
    // console.log('NameInputOutput updated!')
    if (prevProps.displayName !== this.props.displayName) {
      this.setState({ showSecret: !this.state.showSecret });
    }
  }

  componentWillUnmount() {
    alert("buhbye");
  }

  render() {
    // console.log('NameInputOutput component has rendered')

    return (
      <section className="inputOutput">
        <input onChange={this.props.grabInput} placeholder="enter name" />
        {this.props.displayName}
        {this.state.showSecret ? (
          <p>{this.state.secret}</p>
        ) : (
          <p>I have no secrets</p>
        )}
      </section>
    );
  }
}
