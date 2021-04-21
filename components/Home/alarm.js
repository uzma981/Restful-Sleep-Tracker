import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {LinearGradient} from 'expo-linear-gradient';

import { CircleButton } from '../config';

export default function AlarmScreen({navigation}) {
  const [dateStart, setDateStart] = useState(new Date(1598051730000));
  const [dateEnd, setDateEnd] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate || dateStart;
    setShow(Platform.OS === 'ios');
    setDateStart(currentDate);
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || dateEnd;
    setShow(Platform.OS === 'ios');
    setDateEnd(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (  
    <View style={styles.container}>
      <LinearGradient colors={['#2d187e','#003049']} style={styles.lGradient}>
        <Text style={styles.title}>
          Sleep time: {dateStart.getHours().toString()} : {dateStart.getMinutes().toString()}
        </Text>
        <View>
          <Button onPress={showTimepicker} title="Select bed time" color ="581a87"/>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dateStart}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeStart}
          />
        )}

        <Text style={styles.title}>
          Wakeup time: {dateEnd.getHours().toString()} : {dateEnd.getMinutes().toString()}
        </Text>
        <View>
        <Button onPress={showTimepicker} title="Select wake up time" color ="581a87"/>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker2"
            value={dateEnd}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeEnd}
          />
        )}

        <CircleButton
          text="Submit"
          size={150}
          color="#7986cb"
          textColor="white"
          fontSize={20}
          margin={50}
          onPress={() => submitChanges({navigation}, dateStart, dateEnd)}
      />
     </LinearGradient>
    </View>
  );  
}

const showAlert = () =>
  Alert.alert(
    "Sleep Target",
    "Successfully updated sleep target",
    [
      {
        text: "Close",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );

let submitChanges = ({navigation}, start, end) => {
  global.sleepTarget = start;
  global.wakeUpTarget = end;
  showAlert();
  navigation.goBack();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lGradient: {
    flex: 1,
    padding: 100
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  sleepTime: {
    flexDirection: 'row'
  }
});

