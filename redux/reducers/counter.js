import actionTypes from '../../constants/actionTypes';

const merge = (prev, next) => Object.assign({}, prev, next);

const INITIAL_STATE = {
  currentValue: 0,
}

const counterReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_UP:
      return merge(state, { currentValue: state.currentValue + action.payload });
    case actionTypes.INCREMENT_DOWN:
      return merge(state, { currentValue: state.currentValue - action.payload });
    case actionTypes.RESET_COUNTER:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default counterReducer;
