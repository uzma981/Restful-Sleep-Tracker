import React from 'react';
import {Text, View, Button} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import { styles } from './diaryConfig';
import './diaryConfig';

export default function CalendarScreen({ navigation }) {
  var temp = '2021-04-03';
  const mark = {
    [global.pickedDate]:{marked: true, dotColor: '#50cebb'}
  };

  const selectedDay = (date) =>{
    var isDateTaken = false; // create this variable every time date is picked from the calendar
    global.pickedDate = date;

    if (answers.length == 0) {
      navigation.push('Questions');
    }else{
      for(var i = 0; i < answers.length; i++){
        if(answers[i] == date){
          navigation.push('Diary Entry');
          isDateTaken = true;
          break;
        }
      }
      if(!isDateTaken){
        navigation.push('Questions');
      }
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor: '#003049'}}>
      <Text style={styles.text}>Pick a date!</Text>
      <Calendar
       onDayPress={({dateString}) => {selectedDay(dateString.toString())}}
       enableSwipeMonths={true}
       markedDates={
         {[global.pickedDate]: {marked: true, dotColor: '#50cebb'}},
         {[temp]: {marked: true, dotColor: '#50cebb'}},
         {[global.allDates.values()]: {marked: true, dotColor: '#50cebb'}},
         {temp, pickedDate: {marked: true, dotColor: '#50cebb'}}
       }
      />
    </View>
  );
}