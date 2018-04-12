import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Counter from './Counter';

import counterActions from './redux/actions/counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Subscriber extends React.Component {
  state = {
    incrementer: 3,
    decrementer: 1,
  }

  _handleIncrement = () => {
    this.props.actions.incrementCounter(this.state.incrementer);
  }

  _handleDecrement = () => {
    this.props.actions.decrementCounter(this.state.decrementer);
  }

  _handleReset = () => {
    this.props.actions.resetCounter();
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Counter />
        <Button
          onPress={this._handleIncrement}
          title='+'
        />
        <Button
          onPress={this._handleDecrement}
          title='-'
        />
        <Button
          onPress={this._handleReset}
          title='Reset'
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    incrementCounter: counterActions.incrementCounter,
    decrementCounter: counterActions.decrementCounter,
    resetCounter: counterActions.resetCounter,
  }, dispatch)
})

export default connect(null, mapDispatchToProps)(Subscriber);