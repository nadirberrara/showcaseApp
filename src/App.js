import React from 'react';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import ShowcaseAll from './components/ShowcaseAll';
import ShowcaseFav from './components/ShowcaseFav';
import Home from './components/Home';
import Login from './components/Login';

const MyApp = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  All: { screen: ShowcaseAll },
  Fav: { screen: ShowcaseFav }
});

class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDMjW8G7Gem4rqg00TO708xeic1F2YRvaE',
      authDomain: 'showcaseapp-92dda.firebaseapp.com',
      databaseURL: 'https://showcaseapp-92dda.firebaseio.com',
      projectId: 'showcaseapp-92dda',
      storageBucket: 'showcaseapp-92dda.appspot.com',
      messagingSenderId: '451030899745'
    };
    firebase.initializeApp(config);
  }

  render() {
    return <MyApp />;
  }
}

export default App;
