import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './navigators/AppNavigator';
import configureStore from './store/index';
import { SafeAreaView } from "react-navigation";

const { store } = configureStore();

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
          <AppNavigator />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
