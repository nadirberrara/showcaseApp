import React from 'react';
import { View } from 'react-native';
import Input from './common/Input';
import Button from './common/Button';
import CardSection from './common/CardSection';

class LoginForm extends React.Component {
  static navigationOptions = {
    title: 'Please Login',
    headerLeft: null
  };

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <CardSection>
          <Input label="mail" placeholder="chips@gmail.com" />
        </CardSection>
        <CardSection>
          <Input label="password" placeholder="*************" secureTextEntry />
        </CardSection>
        <CardSection>
          <Button
            buttonTitle="Login"
            onPress={() => this.props.navigation.navigate('All')}
            // onPress={() => console.log('LoggedIn')}
          />
        </CardSection>
      </View>
    );
  }
}

export default LoginForm;
