import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class sleepObject {
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
  setWakeUpTime(wakeUpTime) { this.wakeUpTime wakeUpTime; }
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
