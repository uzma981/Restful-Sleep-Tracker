import React, {useState} from 'react';  
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import ReactNativeAN from 'react-native-alarm-notification';

import { CircleButton } from '../config';

export default function AlarmScreen({navigation}) {
  /*
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const handleChange = (value: {hours: number, minutes: number}) => {
    setHours(value.hours);
    setMinutes(value.minutes);
  };
  */
  const [startHour, onChangeStartHour] = useState(null);
  const [startMinute, onChangeStartMinute] = useState(null);
  const [endHour, onChangeEndHour] = useState(null);
  const [endMinute, onChangeEndMinute] = useState(null);

  return (  
    <View style={styles.container}>
      <Text style={styles.title}>
        Select Sleep time
      </Text>
      <View style={styles.sleepTime}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeStartHour}
          value={startHour}
          placeholder="hour"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeStartMinute}
          value={startMinute}
          placeholder="minute"
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.title}>
        Select Wake Up time
      </Text>
      <View style={styles.sleepTime}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEndHour}
          value={endHour}
          placeholder="hour"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEndMinute}
          value={endMinute}
          placeholder="minute"
          keyboardType="numeric"
        />
      </View>

      <CircleButton
        text="Set"
        size={150}
        color="#7986cb"
        textColor="white"
        fontSize={20}
        margin={50}
        onPress={() => submitChanges({navigation})}
      />
    </View>
  );  
}

let submitChanges = ({navigation}) => {
  navigation.goBack();
}:

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  sleepTime: {
    flexDirection: 'row'
  }
});

