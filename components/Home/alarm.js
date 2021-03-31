import React, {useState} from 'react';  
import {StyleSheet, Text, View} from 'react-native';
import TimePicker from 'react-native-simple-time-picker';

export default function AlarmScreen() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const handleChange = (value: {hours: number, minutes: number}) => {
    setHours(value.hours);
    setMinutes(value.minutes);
  };

  return (  
    <View style={styles.container}>
      <Text style={styles.title}>
        Select Sleep time
      </Text>
      <Text>
        Selected Time: {hours}:{minutes}
      </Text>
      <TimePicker
        value={{hours, minutes}}
        onChange={handleChange}
      />
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});

