import { StyleSheet } from 'react-native';
var HashMap = require('hashmap');
import { SleepObject, deserialize } from '../config.js'

global.sleep = new SleepObject();

global.question1;
global.question2;
global.question3;
global.question4;

global.answer;// full answers of 1 entry
global.answers = new Array();//array
global.allDates = new Array(); //filled with only dates dd/mm/yy
global.info;
global.pickedDate;

var sleepObject;

global.mappedData = new HashMap();

export function addToSleepObject(){
  var temp = answer.split(",");
  if(global.sleepObjects[pickedDate] == undefined){
    alert("hello");
    sleepObject = new SleepObject(global.pickedDate);

    sleepObject.setBedTime(temp[0]);
    sleepObject.setSleepTime(temp[1]);
    sleepObject.setWakeUpTime(temp[2]);
    sleepObject.setOutOfBedTime(temp[3]);
    global.sleepObjects[global.pickedDate] = sleepObject.serialize();
  }
  else {
    let instance = deserialize(global.sleepObject[pickedDate]);
    instance.setBedTime(temp[0]);
    instance.setSleepTime(temp[1]);
    instance.setWakeUpTime(temp[2]);
    instance.setOutOfBedTime(temp[3]);
    global.sleepObjects[global.pickedDate] = instance.serialize();
  }
  console.log(global.sleepObjects);
  //console.log("sleep" , global.sleepObjects["20-04-2021"]);
}

export function testSleepObject(){

}

export function addToHashMap(pickedDate, answer){
if(pickedDate !=null && answer != null){
  mappedData.set(pickedDate, answer);
}
}

export function testHashMap(){
//return mappedData.get(pickedDate);
mappedData.forEach(function(value, key) {
  console.log(key + " : " + value);
});
}

export function validate24(question2, question4) {
  var regex = /^\d\.[0-5][0-9]$/;
  return regex.test(question2) && regex.test(question4);
}

export function saveNewInfo(answer, navigation) {
  for (var j = 0; j < global.answers.length; j++) {
    if (global.answers[j] == pickedDate) {
      global.answers.splice(j + 1, 1, answer);// find the date and replace the answer with new info
      //#######################
      mappedData.set(pickedDate, answer);
      break;
    }
  }
  alert('Updated Successfuly!');
  navigation.reset({
    index: 0,
    routes: [
      {
        name: 'Calendar',
      },
    ],
  });
  var temp1 = answer.split(",");
  console.log(temp1);
 // sleep.setDiaryEntry(mappedData);//update to sleep object
 if(global.sleepObjects[pickedDate].getBedTime() != null){
    sleepObject = new SleepObject(global.pickedDate);
    sleepObject.setBedTime(temp1[0]);
    sleepObject.setSleepTime(temp1[1]);
    sleepObject.setWakeUpTime(temp1[2]);
    sleepObject.setOutOfBedTime(temp1[3]);

    global.sleepObjects[global.pickedDate] = sleepObject.serialize();
   }
 console.log(global.sleepObjects);
}

export function deleteEntry(date, navigation) {
  for (var j = 0; j < global.answers.length; j++) { //1/04/2021, answer, 2/04/2021, answer = 4
    if (global.answers[j] == date) {
      global.answers.splice(j, 1);// this removes the date from array and array length becomes 1 less
      global.answers.splice(j, 1);// answer moves one index back, instead of date in the same index, answer goes, this removes the answer
      //###############
      mappedData.delete(date);
      break;
    }
  }
  var diffFormat = date.split("-");
  diffFormat = diffFormat[2] + "-" + diffFormat[1] + "-" + diffFormat[0];
  for (var j = 0; j < global.allDates.length; j++) {
    if (global.allDates[j] == diffFormat) {
      global.allDates.splice(j, 1);
      break;
    }
  }
  alert("Deleted Successfully!");
  navigation.push('Calendar');
  if(global.sleepObjects[pickedDate].getBedTime() != null){
    //sleepObject.setDiaryEntry(answer);
    global.sleepObjects[global.pickedDate] = undefined;
   }
   console.log(global.sleepObjects);
 // sleep.setDiaryEntry(mappedData);//update to sleep object
  //console.log(global.sleep.getDiaryEntry());
}

export function getAnswers(date, info) {
  for (var i = 0; i < global.answers.length; i++) {
    if (global.answers[i] == date) {
      info = global.answers[i + 1];
      break;
    }
  }
  return info.split(",");
}

export function addToArray() {
  if (pickedDate != null && answer != null) {
    answers.push(pickedDate);
    answers.push(answer);

    var diffFormat = pickedDate.split("-");
    diffFormat = diffFormat[2] + "-" + diffFormat[1] + "-" + diffFormat[0];// i need that in order to be able to mark filled days
    //alert(diffFormat);
    allDates.push(diffFormat);
    //######################
    mappedData.set(pickedDate, answer); //hashmap
    //AddData();
  //  sleep.setDiaryEntry(mappedData);//update to sleep object

    /*sleep.forEach(function(value, key) {
      console.log(key + " : " + value);
    });*/
    console.log(global.sleep.getDiaryEntry());
    console.log(answer);
    addToSleepObject();

  }
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    //paddingTop: StatusBar.currentHeight,
  },
  // scrollView: {
  // backgroundColor: 'pink',
  //marginHorizontal: 20,
  //},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    //justifyContent: "center",
    height: 40,
    margin: 12,
    //marginLeft:20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  heading: {
    padding: 20,
    fontFamily: "monospace",
    color: "pink",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    textAlign: 'center',
    padding: 20,
    fontFamily: "monospace",
    color: "#F8FFE5",
    fontSize: 15,
    fontWeight: "bold",
    //textAlign: "center",
    // backgroundColor: "#000000a0"
  },
});
