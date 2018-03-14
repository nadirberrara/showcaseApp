import { AppRegistry } from 'react-native';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './src/reducers';
import App from './src/App';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('showcaseApp', () => Root);
