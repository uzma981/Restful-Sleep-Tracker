import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Navigator from './components/navigator';
import './components/config';
import { loadSleepData, saveSleepDataStatic, saveSleepData } from './components/config';

const tempJSON = {
  "24/04/2021": {
    "bedTime": "21:5",
    "sleepTime": "23:30",
    "wakeUpTime": "10:0",
    "outOfBedTime": "10:20"
  },
  "24/05/2021": {
    "bedTime": "21:20",
    "sleepTime": "23:45",
    "wakeUpTime": "8:45",
    "outOfBedTime": "10:20"
  },
  "24/06/2021": {
    "bedTime": "22:50",
    "sleepTime": "22:55",
    "wakeUpTime": "9:30",
    "outOfBedTime": "10:20"
  },
  "24/07/2021": {
    "bedTime": "20:15",
    "sleepTime": "22:8",
    "wakeUpTime": "11:15",
    "outOfBedTime": "10:20"
  }
};

const getSleepData = () => {
  return useEffect(() => {
    loadSleepData();
  }, []);
};

export default function App() {
  var jsonObject = getSleepData();

  if (jsonObject === undefined) {
    global.sleepObjects = tempJSON;
    useEffect(() => {
      saveSleepData();   
    }, []);
    console.log("saved static json");
    console.log(global.sleepObjects);
  }
  else {
    global.sleepObjects = JSON.strinfigy(jsonObject);
    console.log("loaded async storage");
    console.log(global.sleepObjects);
  }

  return (
    <Navigator />
  );
}

