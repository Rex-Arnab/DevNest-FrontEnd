import './styles.css';
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return <button onClick={this.handleCount}>{this.state.count}</button>;
  }
}
export default function App() {
  return (
    <div className="App">
      <p>
        There are 4 counter component instances that each manage their own
        state.
      </p>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
