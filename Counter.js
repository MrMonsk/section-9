import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    console.log(this.props.counter);
    return (
      <Text>{this.props.counter.currentValue}</Text>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer,
});

export default connect(mapStateToProps)(Counter);
