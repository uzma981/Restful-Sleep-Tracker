import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import moment from "moment";

import SleepGoalScreen from './sleepGoal';

export default function Clock({ navigation }) {
  const [time, setTime] = useState(moment().format("LT"));
  const [date, setDate] = useState(moment().format("LL"));

  return (
    <View style>
        <View style={styles.clockContainer}>
          <Text style={styles.timeText}>
            {time}
          </Text>
          <Text style={styles.dateText}>
            {date}
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  clockContainer: {
    borderWidth: 5,
    borderColor: '#C5B4E3',
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:85,
  },
  timeText: {
    color: '#999999',
    fontSize: 90,
    alignItems: 'center'
  },
  dateText: {
    color: '#999999',
    fontSize: 30,
    alignItems: 'center'
  },
});
