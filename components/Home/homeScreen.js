import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import Clock from "./clock";
import { CircleButton, globalStyles } from '../config';
import '../config';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#003049', '#9370DB']} style={{flex:1}}>
        <View style={globalStyles.clock}>
          <TouchableOpacity
            onPress={() => navigation.push("Alarm")}>
            <Clock />
          </TouchableOpacity>
        </View>

        
        <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
         <LinearGradient
          colors={['#9370DB', '#BB8FCE']}
          style={styles.signIn}
         >
          <Text style={styles.textSign}>Activities</Text>
          
        </LinearGradient> 
      </TouchableOpacity>



        <View style={styles.buttons}>

          <CircleButton
            text="Start Sleep"
            size={150}
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
  navigation.navigate('Sleep');
  global.sleeping = true;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  activityButton: {
    padding: 10,
    padding: 20,
    
    marginBottom: 20
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

