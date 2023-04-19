import React, { Component } from 'react';

// Define the props interface
interface MyClassProps {
  name: string;
}

// Define the state interface
interface MyClassState {
  count: number;
}

// Define the class-based component
class MyClassComponent extends Component<MyClassProps, MyClassState> {
  constructor(props: MyClassProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>My name is {this.props.name}</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase Count</button>
      </div>
    );
  }
}

export default MyClassComponent;
