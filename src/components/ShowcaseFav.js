import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, ScrollView, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientsList from './GradientsList';
import CardSection from './common/CardSection';
import Button from './common/Button';
import * as actions from './actions';

class ShowcaseFav extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Favorites',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="md-arrow-back"
            size={30}
            color="#900"
            style={{ marginLeft: 10, color: 'black', fontSize: 22 }}
          />
        </TouchableOpacity>
      )
    };
  };

  clearFavorites() {
    this.props.clearAllFavorites();
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
                secondText={'In four favorites'}
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
                style={{ position: 'absolute' }}
                buttonTitle="Clear All"
                onPress={() => this.clearFavorites()}
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
  const favGradients = state.gradients.filter(item =>
    state.favorites.includes(item.id)
  );
  console.log('favorites:', state.favorites);
  return {
    favorites: state.favorites,
    items: ds.cloneWithRows(favGradients)
  };
};

export default connect(mapStateToProps, actions)(ShowcaseFav);
