import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './navigators/AppNavigator';
import configureStore from './store/index';

const { store } = configureStore();

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
