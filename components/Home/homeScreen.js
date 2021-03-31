import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

import Clock from "./clock";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.clock}>
        <TouchableOpacity
          onPress={() => navigation.push("Alarm")}>
          <Clock />
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <View style={styles.activityButton}>
          <Button
            onPress={() => navigation.push("Activity")}
            title="Activities"
            color="#841584"
          />
        </View>

        <CircleButton
          text="Start Sleep"
          size={150}
          color="#7986cb"
          textColor="white"
          fontSize={20}
          margin={10}
          onPress={() => navigation.push("Sleep")}
        />
      </View>
    </View>
  );
}

const CircleButton = props => (
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
    onPress={props.onPress}>
    <Text style={{color: props.textColor, fontSize: props.fontSize}}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000'
  },
  clock: {
    flex: 1,
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  activityButton: {
    padding: 10,
    padding: 20,
    marginBottom: 20
  },
});

