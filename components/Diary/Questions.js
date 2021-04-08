import React, {useState} from 'react';
import {Text, View, Button, SafeAreaView, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { styles } from './diaryConfig';

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
//second question
  const [date2, setDate2] = useState(new Date(1598050820000));
  const [mode2, setMode2] = useState('date2');
  const [show2, setShow2] = useState(false);
  
  
  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate);
  };
  
  const showMode2 = (currentMode) => {
    setShow2(true);
    setMode2(currentMode);
  };
  
  const showTimepicker2 = () => {
    showMode2('time');
  };
//second question
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
  //forth question
  const [date4, setDate4] = useState(new Date(1598050820000));
  const [mode4, setMode4] = useState('date4');
  const [show4, setShow4] = useState(false);
  
  
  const onChange4 = (event, selectedDate) => {
    const currentDate = selectedDate || date4;
    setShow4(Platform.OS === 'ios');
    setDate4(currentDate);
  };
  
  const showMode4 = (currentMode) => {
    setShow4(true);
    setMode4(currentMode);
  };
  
  const showTimepicker4 = () => {
    showMode4('time');
  };
  //forth question
  //answers.push("Hello!");
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#003049' }}>
            <View style ={styles.column}>
              <Text style={styles.text}>1. What time did you go to bed?  , {answers.length} </Text>  
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
                 // question1 ={date}               
                />
              )}    
                 <Text style={styles.text}>{question1 = date01.getHours() + ":" + date01.getMinutes()}</Text>       
            </View>
            <View style ={styles.column}>
              <Text style={styles.text}>2. When did you fall asleep? </Text>  
              
              <View>
                <Button 
                onPress={showTimepicker2} title="Pick a time" 
                />
              </View>
              {show2 && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date2}
                  mode={mode2}
                  is24Hour={true}
                  display="default"
                  onChange={onChange2}
                 // question2 ={date2}               
                />
              )}    
                 <Text style={styles.text}>{question2 = date2.getHours() + ":" + date2.getMinutes()}</Text>       
            </View>
            <View style ={styles.column}>
              <Text style={styles.text}>3. At what time did you wake up? </Text>  
              
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
                  //question3 ={date}               
                />
              )}    
                 <Text style={styles.text}>{question3 = date3.getHours() + ":" + date3.getMinutes()}</Text>       
            </View>
            <View style ={styles.column}>
              <Text style={styles.text}>4. At what time did you get out of bed? </Text>  
              
              <View>
                <Button
                onPress={showTimepicker4} title="Pick a time" />
              </View>
              {show4 && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date4}
                  mode={mode4}
                  is24Hour={true}
                  display="default"
                  onChange={onChange4}
                  //question3 ={date}               
                />
              )}    
                 <Text style={styles.text}>{question4 = date4.getHours() + ":" + date4.getMinutes()}</Text>       
            </View>
           <Text>{answer = question1 + "," + question2 + "," + question3 + "," + question4}</Text>
{/* this button eliminates possibility to go back the navigation ladder after the information was submitted */}
        <Button 
          title="Submit"
          onPress={() =>
          
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'Submit',
                  params: { someParam: 'Param1' },
                },
              ],
            })
          }
        />   
        
      </View>
      </ScrollView>
    </SafeAreaView>
    );    
}
