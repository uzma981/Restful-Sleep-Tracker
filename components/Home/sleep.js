import React, {Component, useEffect} from 'react';
import {View, Text, BackHandler, StyleSheet, TouchableOpacity} from 'react-native';

import Clock from "./clock";
import { CircleButton, globalStyles } from '../config';
import "../config";

export default function SleepScreen({ navigation }) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true)
  }, [])

  return (  
    <View style={styles.container}>       
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
        margin={10}
        onPress={() => leaveSleep({ navigation })}
      />
    </View>  
  );  
}

const leaveSleep = ({navigation}) => {
  navigation.goBack();
  global.sleeping = false;
};

const styles = StyleSheet.create({  
  container: {  
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },  
});  

