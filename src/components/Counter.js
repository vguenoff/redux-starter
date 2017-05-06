import React from 'react';
// import { Component } from 'react';

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

// import PropTypes from 'prop-types';
//
// class Counter extends Component {
//   static propTypes = {
//     value: PropTypes.number.isRequired,
//     onIncrement: PropTypes.func.isRequired,
//     onDecrement: PropTypes.func.isRequired
//   };
//
//   render() {
//     const { value, onIncrement, onDecrement } = this.props;
//     return (
//       <div>
//         <p>Value: </p>
//         <h2>
//           {value}
//         </h2>
//         <button onClick={onIncrement}>
//           +
//         </button>
//         <button onClick={onDecrement}>
//           -
//         </button>
//       </div>
//     );
//   }
// }

export default Counter;
