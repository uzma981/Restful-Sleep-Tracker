import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

import Clock from "./clock";
import { CircleButton, globalStyles } from '../config';
import '../config';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={globalStyles.clock}>
        <TouchableOpacity
          onPress={() => navigation.push("Alarm")}>
          <Clock />
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <View style={styles.activityButton}>
          <Button
            onPress={() => navigation.push("Activity")}
            title="Activities"
            color="#841584"
          />
        </View>

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
    alignItems: 'center'
  },
  activityButton: {
    padding: 10,
    padding: 20,
    marginBottom: 20
  },
});

