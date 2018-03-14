import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity, ScrollView, ListView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Button from './common/Button';
import * as actions from './actions';
import GradientsList from './GradientsList';
import CardSection from './common/CardSection';

class ShowcaseAll extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })]
    });

    return {
      title: 'Showcase',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.dispatch(resetAction)}>
          <Icon
            name="login"
            size={30}
            style={{ marginRight: 10, color: 'black', fontSize: 22 }}
          />
        </TouchableOpacity>
      ),
      headerLeft: null
    };
  };

  componentWillMount() {
    this.props.gradientsFetch();
    this.props.favoritesFetch();
  }

  render() {
    const {
      containerStyle,
      scrollviewStyle,
      buttonView,
      buttonCardSection,
      containerCardSection
    } = styles;

    return (
      <View style={containerStyle}>
        <CardSection style={containerCardSection}>
          <ScrollView style={scrollviewStyle}>
            <CardSection
              style={{
                flexDirection: 'column'
              }}
            >
              <GradientsList
                dataSource={this.props.items}
                secondText={'Suggested for you'}
                favorites={this.props.favArray}
              />
            </CardSection>
          </ScrollView>

          <View style={buttonView}>
            <CardSection style={buttonCardSection}>
              <Button
                buttonTitle="Show all my favorites"
                onPress={() => this.props.navigation.navigate('Fav')}
              />
            </CardSection>
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    padding: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1
  },
  containerCardSection: {
    padding: 1,
    flexDirection: 'column',
    flex: 1
  },
  scrollviewStyle: {
    backgroundColor: 'white',
    flex: 1
  },
  buttonView: {
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 40
  },
  buttonCardSection: {
    bottom: 20,
    position: 'absolute',
    width: 220,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }
};

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = state => {
  let favGradientsArray = [];
  if (state.gradients && Array.isArray(state.gradients)) {
    const favGradients = state.gradients.filter(item =>
      state.favorites.includes(item.id)
    );
    favGradientsArray = favGradients.map(item => item.id);
  }

  return {
    favArray: favGradientsArray,
    favorites: state.favorites,
    items: ds.cloneWithRows(state.gradients)
  };
};

export default connect(mapStateToProps, actions)(ShowcaseAll);
