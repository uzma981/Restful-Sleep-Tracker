import React, { Component, setState } from 'react';
import { Text, View, Button, LinearGradient } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

var nav;

export default function CalendarScreen({ navigation }) {//need a function to simply create a screen and get navigation, doing it with class is a bit more complicated
  nav = navigation; // save navigation in variable in order to be able to use it in class
  return (
    <CalendarClass />//calling class
  );
}

class CalendarClass extends Component { // need a class in order to use states for marked dates
  constructor(props) {
    super(props);
    this.state = {
      marked: null,
    };
  }
  componentDidMount() {
    this.markDates();
  }

  markDates = () => {//mark dates dynamically from array/ it needs to be an object in order to use it in Calendars 'markeddates' 
    var obj = global.allDates.reduce((c, v) => Object.assign(c, { [v]: { selected: true } }), {});
    this.setState({ marked: obj });
  }
  render() {

    function selectedDay(date) {
      var isDateTaken = false; // create this variable every time date is picked from the calendar
      global.pickedDate = date;

      if (answers.length == 0) {
        nav.push('Questions');
      } else {
        for (var i = 0; i < answers.length; i++) {
          if (answers[i] == date) {
            nav.push('Diary Entry');
            isDateTaken = true;
            break;
          }
        }
        if (!isDateTaken) {
          nav.push('Questions');
        }
      }
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2D187E' }}>

        <Calendar
          onDayPress={({ dateString }) => { selectedDay(dateString.toString()) }}
          enableSwipeMonths={true}
          markedDates={this.state.marked}
        />
      </View>
    );
  }
}

