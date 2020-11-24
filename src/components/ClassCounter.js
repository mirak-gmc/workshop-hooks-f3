import React from "react";

class ClassCounter extends React.Component {
  state = {
    count: 22,
  };
  componentDidMount() {
    console.log("component is rendering");
  }
  componentDidUpdate() {
    console.log("component is updating " + this.state.count);
  }

  componentWillUnmount() {
    alert("The component is gone :'(");
  }

  incremnt = (e) => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="counter">
        <h1>Class Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incremnt()}>Incremnt</button>
      </div>
    );
  }
}

export default ClassCounter;
