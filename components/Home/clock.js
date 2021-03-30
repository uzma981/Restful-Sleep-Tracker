import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import moment from "moment";

import AlarmScreen from './alarm';

export default function Clock({ navigation }) {
  const [time, setTime] = useState(moment().format("LTS"));
  const [date, setDate] = useState(moment().format("LL"));

  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    alignItems: 'center',
  },
  clockContainer: {
    borderWidth: 1,
    marginTop: 50,
    borderColor: 'orange'
  },
  timeText: {
    color: '#999999',
    fontSize: 75,
  },
  dateText: {
    color: '#999999',
    fontSize: 20,
  },
});
