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
  }

  render() {
    return (
      <View
        style={{
          padding: 1,
          flexDirection: 'column',
          backgroundColor: 'white',
          flex: 1
        }}
      >
        <CardSection
          style={{
            padding: 1,
            flexDirection: 'column',
            flex: 1
          }}
        >
          <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
            <CardSection
              style={{
                flexDirection: 'column'
              }}
            >
              <GradientsList
                dataSource={this.props.items}
                secondText={'Suggested for you'}
              />
            </CardSection>
          </ScrollView>

          <View
            style={{
              alignItems: 'center',
              zIndex: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              padding: 40
            }}
          >
            <CardSection
              style={{
                bottom: 20,
                position: 'absolute',
                width: 220,
                backgroundColor: 'rgba(255, 255, 255, 0.5)'
              }}
            >
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

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = state => {
  return {
    items: ds.cloneWithRows(state.gradients)
  };
};

export default connect(mapStateToProps, actions)(ShowcaseAll);
