import { AppRegistry } from 'react-native';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import App from './src/App';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('showcaseApp', () => Root);
