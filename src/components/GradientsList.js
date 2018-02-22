import React from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import Gradient from './Gradient';
import * as actions from './actions/FavoriteAction';

class GradientsList extends React.Component {
  onStarClicked = id => {
    this.props.toggleGradientFav(id);
  };

  gradientsRender = rowData => {
    return (
      <View
        style={{
          width: 120,
          alignItems: 'center'
        }}
      >
        <Gradient
          onPress={() => this.onStarClicked(rowData.id)}
          gradient={rowData}
          secondText={this.props.secondText}
          style={{ borderWidth: 3 }}
        />
      </View>
    );
  };

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.props.dataSource}
        renderRow={this.gradientsRender}
        secondText={this.props.secondText}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      />
    );
  }
}

export default connect(null, actions)(GradientsList);
