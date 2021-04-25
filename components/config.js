import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as FileSystem from 'expo-file-system';

export class SleepObject {
  bedTime;
  sleepTime;
  wakeUpTime;
  outOfBedTime;

  constructor(startDate) {
    this.startDate = startDate;
  }

  // store the time as moment.js variables
  getBedTime() { return this.bedTime; }
  getSleepTime() { return this.sleepTime; }
  getWakeUpTime() { return this.wakeUpTime; }
  getOutOfBedTime() { return this.outOfBedTime; }
  setBedTime(bedTime) { this.bedTime = bedTime; }
  setSleepTime(sleepTime) { this.sleepTime = sleepTime; }
  setWakeUpTime(wakeUpTime) { this.wakeUpTime = wakeUpTime; }
  setOutOfBedTime(outOfBedTime) { this.outOfBedTime = outOfBedTime; }

  serialize() {
    return JSON.stringify(this);
  }
}

global.sleepObjects = new Object();

export const deserialize = (json) => {
  let object = JSON.parse(json);
  return Object.assign(new SleepObject(), object);
};

// write sleepObjects to json file
export const save = () => {
  let json = JSON.stringify(global.sleepObjects); 
  FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'database/sleepdata.json', json);
};

// load json file to sleepObjects
export const load = () => {
  let json = FileSystem.readAsStringAsync(FileSystem.documentDirectory + 
               'database/sleepdata.json', FileSystem.EncodingType.UTF8);
  global.sleepObjects = JSON.parse(json);
};

export const addToSleep = (instance, date) => {
  global.sleepObjects[date] = instance.serialize();
};

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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
