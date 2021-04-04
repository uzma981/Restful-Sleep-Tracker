import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

global.sleeping = false;

export const CircleButton = props => (
  <TouchableOpacity
    style={{
      margin: props.margin,
      height: props.size,
      width: props.size,
      backgroundColor: props.color,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: props.size * 2,
    }}
    onLongPress={props.onPress}>
    <Text style={{color: props.textColor, fontSize: props.fontSize}}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export const globalStyles = StyleSheet.create({
  bgColour: {
  },
  clock: {
    flex: 1,
    alignItems: 'center',
  },
});
