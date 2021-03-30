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

      <View style={styles.activityButton}>
        <button
          onpress={() => console.log("hi")}
          title="Activities"
          color="#841584"
        />
      </View>
      <View style={styles.sleepButton}>
        <button
          onpress={() => console.log("hi again")}
          title="Start Sleep"
          color="#841584"
        />
      </View>
  );  
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000'
  },
  clock: {  
      flex: 1,  
      alignItems: 'center'  
  },  
  activityButton: {
    flex: 1,
    flexDirection: 'column'
  },
  sleepButton: {
    flex: 1,
    flexDirection: 'column'
  }
});  

