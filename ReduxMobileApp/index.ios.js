import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/Store/storeConfig'
import { App } from './src/App';
import { styles } from './src/styles/styles';

export default class ReduxMobileApp extends Component {
  render() {
    return (
      <View style={{width: '100%', height: '100%'}}>
        <Provider store={ store }>
          <App />
        </Provider>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReduxMobileApp', () => ReduxMobileApp);
