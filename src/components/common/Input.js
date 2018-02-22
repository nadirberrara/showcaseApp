import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{label} :</Text>
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      style={styles.inputStyle}
      value={value}
      onChangeText={onChangeText}
      autoCorrect={false}
    />
  </View>
);

const styles = {
  containerStyle: {
    flexDirection: 'row',
    height: 40,
    flex: 1,
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 20,
    width: 100
  }
};

export default Input;
