import actionTypes from '../../constants/actionTypes';

const incrementCounter = (incrementer) => ({
  type: actionTypes.INCREMENT_UP,
  payload: incrementer, 
});

const decrementCounter = (decrementer) => ({
  type: actionTypes.INCREMENT_DOWN,
  payload: decrementer,
});

const resetCounter = () => ({
  type: actionTypes.RESET_COUNTER,
});

export default {
  incrementCounter,
  decrementCounter,
  resetCounter,
}
