import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

<<<<<<< HEAD
class sleepObjectArray {
=======
class sleepObject {
>>>>>>> 55dd1a4f59c07d39ff7c9e421e6afb9d7231a494
  bedTime;
  sleepTime;
  wakeUpTime;
  outOfBedTime;

  constructor(startTime, stopTime) {
    this.startTime = start;
    this.stopTime = end;
  }

  // store the time as moment.js variables
  getBedTime() { return this.bedTime; }
  getSleepTime() { return this.sleepTime; }
  getWakeUpTime() { return this.wakeUpTime; }
  getOutOfBedTime() { return this.outOfBedTime; }
  setBedTime(bedTime) { this.bedTime = bedTime; }
  setSleepTime(sleepTime) { this.sleepTime = sleepTime; }
<<<<<<< HEAD
  setWakeUpTime(wakeUpTime) { this.wakeUpTime = wakeUpTime; }
=======
  setWakeUpTime(wakeUpTime) { this.wakeUpTime wakeUpTime; }
>>>>>>> 55dd1a4f59c07d39ff7c9e421e6afb9d7231a494
  setOutOfBedTime(outOfBedTime) { this.outOfBedTime = outOfBedTime; }
}

sleepObjectArray = [];

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
