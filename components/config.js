import React from 'react';
import { Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import moment from "moment";
//import AsyncStorage from '@react-native-async-storage/async-storage';

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
export const saveSleepData = async() => {
  //let json = JSON.stringify(global.sleepObjects); 
  //FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'database/sleepdata.json', json);
  try {
    const json = JSON.stringify(global.sleepObjects);
    await AsyncStorage.setItem("SleepData", json);
  }
  catch (err) {
    alert(err);
  }
};

// write to json using existing static object
export const saveSleepDataStatic = async(json) => {
  //let json = JSON.stringify(global.sleepObjects); 
  //FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'database/sleepdata.json', json);
  try {
    const jsonValue = JSON.stringify(json);
    await AsyncStorage.setItem("SleepData", jsonValue);
  }
  catch (err) {
    alert(err);
  }
};

// load json file to sleepObjects
export const loadSleepData = async() => {
  //let json = FileSystem.readAsStringAsync(FileSystem.documentDirectory + 
               //'../database/sleepdata.json', FileSystem.EncodingType.UTF8);
  //global.sleepObjects = JSON.parse(json);
  try {
    const jsonValue = await AsyncStorage.getItem('SleepData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  }
  catch (err) {
    alert(err);
  }
};

const removeValue = async() => {
  try {
    await AsyncStorage.removeItem('SleepData')
  }
  catch(err) {
    alert(err);
  }
}

const clearAll = async() => {
  try {
    await AsyncStorage.clear()
  }
  catch(err) {
    alert(err);
  }
}

export const addToSleep = (instance, date) => {
  global.sleepObjects[date] = instance.serialize();
};

export const getTimeDiff = (sleepTime, wakeUpTime) => {
  let startTime = moment(sleepTime, 'HH:mm');
  let endTime = moment(wakeUpTime, 'HH:mm');
  let diff = endTime.subtract(startTime);
  let hours = diff.hours(); // return hours
  let minutes = diff.minutes(); // return minutes
  return hours;
};

export const getSleepToWakeUpTime = () => {
  let arr = [];
  const keys = Object.keys(global.sleepObjects);
  keys.forEach((key, index) => {
    let time1 = global.sleepObjects[key].sleepTime;
    let time2 = global.sleepObjects[key].wakeUpTime;
    arr.push(getTimeDiff(time1, time2));
  });
  return arr;
}

export const getBedToSleepTime = () => {
  let arr = [];
  const keys = Object.keys(global.sleepObjects);
  keys.forEach((key, index) => {
    let time1 = global.sleepObjects[key].bedTime;
    let time2 = global.sleepObjects[key].sleepTime;
    arr.push(getTimeDiff(time1, time2));
  });
  return arr;
}

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
