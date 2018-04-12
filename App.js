import React from 'react';
import Subscriber from './Subscriber';

import { Provider } from 'react-redux';
import store from './redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Subscriber />
      </Provider>
    );
  }
}
