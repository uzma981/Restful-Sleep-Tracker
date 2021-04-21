import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export class SleepObject {
  bedTime;
  sleepTime;
  wakeUpTime;
  diaryEntry;
  outOfBedTime;

  constructor(startDate, stopDate) {
    this.startDate = startDate;
    this.stopDate = stopDate;
  }

  // store the time as moment.js variables
  getBedTime() { return this.bedTime; }
  getSleepTime() { return this.sleepTime; }
  getWakeUpTime() { return this.wakeUpTime; }
  getOutOfBedTime() { return this.outOfBedTime; }
  getDiaryEntry() { return this.diaryEntry; }
  setBedTime(bedTime) { this.bedTime = bedTime; }
  setSleepTime(sleepTime) { this.sleepTime = sleepTime; }
  setWakeUpTime(wakeUpTime) { this.wakeUpTime = wakeUpTime; }
  setOutOfBedTime(outOfBedTime) { this.outOfBedTime = outOfBedTime; }
  setDiaryEntry(diaryEntry) { this.diaryEntry = diaryEntry; }
}

global.sleepObjects = new Object();

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
