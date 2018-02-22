import { AppRegistry } from 'react-native';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import App from './src/App';

const store = createStore(reducers);

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('showcaseApp', () => Root);
