// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset, incrementAsync } from './actions'; // Import incrementAsync action creator
import './Counter.css'; // Import CSS file for Counter component

const Counter = ({ count, increment, decrement, reset, incrementAsync }) => {
  return (
    <div className="counter-container">
      <h1 className="counter-text">Counter: {count}</h1>
      <div className="button-container">
        <button className="counter-button" onClick={increment}>Increment</button>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={incrementAsync}>Increment Async</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  incrementAsync // Add incrementAsync to mapDispatchToProps
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
