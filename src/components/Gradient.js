import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import { Text, TouchableOpacity, View } from 'react-native';

class Gradient extends React.Component {
  render() {
    const { containerGradient, iconStar } = styles;
    const {
      startx,
      starty,
      location1,
      location2,
      endx,
      endy,
      color1,
      color2,
      fav,
      id
    } = this.props.gradient;

    return (
      <View
        style={{
          flexDirection: 'column',
          width: 'auto',
          borderWidth: 1,
          borderColor: 'grey',
          paddingBottom: 2,
          marginTop: 10,
          marginBottom: 5
        }}
      >
        <LinearGradient
          start={{ x: startx, y: starty }}
          locations={[location1, location2]}
          end={{ x: endx, y: endy }}
          colors={[color1, color2]}
          style={containerGradient}
        >
          <TouchableOpacity onPress={this.props.onPress}>
            <Icon
              name={fav ? 'star' : 'star-outlined'}
              size={30}
              color="#900"
              style={iconStar}
            />
          </TouchableOpacity>
        </LinearGradient>
        <Text style={{ paddingLeft: 2 }}>Gradient #{id}</Text>
        <Text style={{ fontSize: 9, paddingLeft: 2 }}>
          {this.props.secondText}
        </Text>
      </View>
    );
  }
}

const styles = {
  containerGradient: {
    flexDirection: 'column',
    width: 100,
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  iconStar: {
    color: 'yellow',
    fontSize: 22,
    marginRight: 2
  }
};

export default Gradient;
