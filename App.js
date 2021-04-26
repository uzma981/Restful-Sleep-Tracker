import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Navigator from './components/navigator';
import './components/config';
import { loadSleepData, saveSleepDataStatic, saveSleepData } from './components/config';
const tempJSON = require('./database/sleepdata.json');

const getSleepData = () => {
  return useEffect(() => {
    loadSleepData();
  }, []);
};

export default function App() {
  var jsonObject = getSleepData();

  if (jsonObject === undefined) {
    global.sleepObjects = JSON.parse(JSON.stringify(tempJSON));
    useEffect(() => {
      saveSleepData();   
    }, []);
    console.log("saved static json");
    console.log(global.sleepObjects);
  }
  else {
    global.sleepObjects = JSON.parse(JSON.stringify(jsonObject));
    console.log("loaded async storage");
    console.log(global.sleepObjects);
  }

  return (
    <Navigator />
  );
}

