import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import Clock from "./clock";
import { CircleButton, globalStyles } from '../config';
import '../config';
import SleepObject from '../config';
import './homeConfig';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2d187e','#003049']} style={{flex:1}}>
        <View style={globalStyles.clock}>
          <TouchableOpacity
            onPress={() => navigation.push("Alarm")}>
            <Clock />
          </TouchableOpacity>
        </View>

        
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
         <LinearGradient
          colors={['#9370DB', '#2D187E']}
          style={styles.signIn}
         >
          <Text style={styles.textSign}>Activities</Text>
          
        </LinearGradient> 
      </TouchableOpacity>


          <CircleButton
            text="Start Sleep"
            size={180}
            color="#7986cb"
            textColor="white"
            fontSize={20}
            margin={10}
            onPress={() => enterSleep({ navigation })}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const enterSleep = ({navigation}) => {
  let start = new Date();
  global.start = start.getDate() + "/" + (start.getMonth()+1) + "/" + start.getFullYear();
  navigation.navigate('Sleep');
  global.sleeping = true;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 50  
  },
  signIn: {  
     flexDirection: 'column',
     marginHorizontal:120,
    width: 150,
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 50,
 
},
textSign: {
  color: 'white',
  fontWeight: 'bold',
  fontSize:20
}
});

