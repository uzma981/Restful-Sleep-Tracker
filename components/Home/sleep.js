import React, {Component, useEffect} from 'react';
import {View, Text, BackHandler, StyleSheet, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import Clock from "./clock";
import { CircleButton, globalStyles } from '../config';
import "../config";
import SleepObject from '../config';
import "./homeConfig";

export default function SleepScreen({ navigation }) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true)
  }, [])

  return (  
    <View style={styles.container}>       
      <LinearGradient colors={['#2d187e','#003049']} style={{flex:1}}>
        <View style={globalStyles.clock}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Alarm")}>
            <Clock />
          </TouchableOpacity>
        </View>

        <CircleButton
          text="Stop Sleep"
          size={150}
          color="#7986cb"
          textColor="white"
          fontSize={20}
          margin={200}
        
          onPress={() => leaveSleep({ navigation })}
        />
      </LinearGradient>
    </View>  
  );  
}

const leaveSleep = ({navigation}) => {
  let stop = new Date();
  global.stop = stop.getDate() + "/" + (stop.getMonth()+1) + "/" + stop.getFullYear();
  submitSleepData();
  global.sleeping = false;
  navigation.goBack();
};

const submitSleepData = () => {
  let sleepObject = new SleepObject(global.start, global.stop);
  global.sleepObjects[global.start] = sleepObject;
}

const styles = StyleSheet.create({  
  container: {  
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },  
});  

