import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import { Text, TouchableOpacity } from 'react-native';
import CardSection from './common/CardSection';

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
      fav
    } = this.props.gradient;

    if (fav) {
      return (
        <CardSection style={{ flexDirection: 'column', width: 110 }}>
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
          <Text> Gradient #1 </Text>
          <Text style={{ fontSize: 10 }}> Suggested for you </Text>
        </CardSection>
      );
    } else {
      return <Text />;
    }
  }
}

const styles = {
  containerGradient: {
    flexDirection: 'column',
    backgroundColor: 'red',
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
