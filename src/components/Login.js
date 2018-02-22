import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Input from './common/Input';
import Button from './common/Button';
import CardSection from './common/CardSection';
import * as actions from './actions';

class LoginForm extends React.Component {
  static navigationOptions = {
    title: 'Please Login',
    headerLeft: null
  };

  emailInputChanged(text) {
    this.props.onEmailInput(text);
  }

  passwordInputChanged(text) {
    this.props.onPasswordInput(text);
  }

  LoginPressed() {
    const { email, password, navigation } = this.props;
    this.props.onLoginButtonPress({ email, password, navigation });
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <CardSection>
          <Input
            label="mail"
            placeholder="chips@gmail.com"
            onChangeText={this.emailInputChanged.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="password"
            placeholder="*************"
            secureTextEntry
            onChangeText={this.passwordInputChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <CardSection style={{ justifyContent: 'center' }}>
          <Text style={{ color: 'red', fontSize: 20 }}>{this.props.error}</Text>
        </CardSection>
        <CardSection>
          <Button buttonTitle="Login" onPress={this.LoginPressed.bind(this)} />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, actions)(LoginForm);
