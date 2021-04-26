import React, { useState } from 'react';
import { Text, View, Button, SafeAreaView, ScrollView, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles, validate24 } from './diaryConfig';

export default function Questions({ navigation }) {
  //first question
  const [date01, setDate] = useState(new Date(1598050820000));
  const [mode, setMode] = useState('date01');
  const [show, setShow] = useState(false);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date01;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };
  //first question
  //third question
  const [date3, setDate3] = useState(new Date(1598050820000));
  const [mode3, setMode3] = useState('date3');
  const [show3, setShow3] = useState(false);


  const onChange3 = (event, selectedDate) => {
    const currentDate = selectedDate || date3;
    setShow3(Platform.OS === 'ios');
    setDate3(currentDate);
  };

  const showMode3 = (currentMode) => {
    setShow3(true);
    setMode3(currentMode);
  };

  const showTimepicker3 = () => {
    showMode3('time');
  };
  //third question

  const [question2, onChangeQuestion2] = React.useState(null);
  const [question4, onChangeQuestion4] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2D187E' }}>
          <View style={styles.column}>
            <Text style={styles.text}>{global.pickedDate}</Text>
            <Text style={styles.text}>1. What time did you go to bed?</Text>
            <View>
              <Button
                onPress={showTimepicker} title="Pick a time" />
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date01}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <Text style={styles.text}>{global.question1 = ("0" + date01.getHours()).slice(-2) + ":" + ("0" + date01.getMinutes()).slice(-2)}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.text}>2. How long did it take you to fall asleep? </Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeQuestion2}
                value={question2}
                placeholder="e.g.: 1.05"
                placeholderTextColor='grey'
                textAlign={'center'}
                keyboardType="numeric"
              />
            </SafeAreaView>
            <Text style={styles.text}>{global.question2 = question2}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.text}>3. What time did you wake up? </Text>

            <View>
              <Button
                onPress={showTimepicker3} title="Pick a time" />
            </View>
            {show3 && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date3}
                mode={mode3}
                is24Hour={true}
                display="default"
                onChange={onChange3}
              />
            )}
            <Text style={styles.text}>{global.question3 = ("0" + date3.getHours()).slice(-2) + ":" + ("0" + date3.getMinutes()).slice(-2)}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.text}>4.How long did it take you to get out of bed? </Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeQuestion4}
                value={question4}
                placeholder="e.g.: 0.35"
                placeholderTextColor='grey'
                textAlign={'center'}
                keyboardType="numeric"
              />
            </SafeAreaView>
            <Text style={styles.text}>{global.question4 = question4}</Text>
          </View>
          <Text>{global.answer = global.question1 + "," + global.question2 + "," + global.question3 + "," + global.question4} { }</Text>
          {validate24(global.question2, global.question4)}
          <Button
            title="Submit"
            onPress={() => {
              if (!validate24(global.question2, global.question4)) {
                alert("Put valid time! (x.xx)");
              } else {
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'Submit',
                    },
                  ],
                })
              }
            }
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
