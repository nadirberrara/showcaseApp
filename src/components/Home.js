import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View } from 'react-native';
import Button from './common/Button';
import CardSection from './common/CardSection';

class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {
      viewContainer,
      viewText,
      mainTitle,
      secondTitle,
      bottomText,
      buttonCardSection
    } = styles;

    return (
      <View style={viewContainer}>
        <LinearGradient
          start={{ x: 0.0, y: 0.2 }}
          locations={[0, 1.9]}
          end={{ x: 0.5, y: 1.0 }}
          colors={['#6600ff', '#cc0099']}
          style={viewText}
        >
          <Text style={mainTitle}>Gradient </Text>
          <Text style={secondTitle}>Showcase </Text>
        </LinearGradient>

        <CardSection style={buttonCardSection}>
          <Button
            buttonTitle="Login"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </CardSection>
        <CardSection>
          <Text style={bottomText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            minima.
          </Text>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  viewContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  viewText: {
    backgroundColor: 'red',
    height: 547,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  mainTitle: {
    color: 'white',
    marginLeft: 50,
    fontSize: 65,
    fontWeight: 'bold'
  },
  secondTitle: {
    color: 'white',
    marginLeft: 50,
    fontSize: 40
  },
  buttonCardSection: {
    borderBottomWidth: 0,
    marginTop: 10,
    marginRight: 50,
    marginLeft: 50
  },
  bottomText: {
    justifyContent: 'center',
    marginRight: 60,
    marginLeft: 60,
    marginBottom: 20,
    fontSize: 12,
    textAlign: 'justify'
  }
};

export default Home;
