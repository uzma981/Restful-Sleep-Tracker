import {StyleSheet} from 'react-native';

global.question1;
global.question2;
global.question3;
global.question4;

global.answer;// full answers of 1 entry
global.answers = new Array();//array
global.allDates = new Array(); //filled with only dates
global.info;
global.pickedDate;

export function testt(){
  for (let index = 0; index < global.allDates.length; index++) {
    const mark = {
      [global.allDates]:{marked: true, dotColor: '#50cebb'}

    };
  }
}

export function saveNewInfo(answer, navigation){
  for(var j = 0; j < global.answers.length; j++){
    if(global.answers[j] == pickedDate){
      global.answers.splice(j+1, 1, answer);// find the date and replace the answer with new info
      break;
    }
  }
    alert('Updated Successfuly!');
   navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Calendar Screen',
        },
      ],
    });
}

export function deleteEntry(date, navigation){//2/04/2021
  for(var j = 0; j < global.answers.length; j++){ //1/04/2021, answer, 2/04/2021, answer = 4
    if(global.answers[j] == date){
      global.answers.splice(j, 1);// this removes the date from array and array length becomes 1 less
      global.answers.splice(j, 1);// answer moves one index back, instead of date in the same index, answer goes, this removes the answer
      break;
    }
  }
    for(var j = 0; j < global.allDates.length; j++){
      if(global.allDates[j] == date){
        global.allDates.splice(j, 1);
        break;
      }
  }
  alert("Deleted Successfully!");
  navigation.push('Calendar Screen');
}

export function getAnswers(date, info){
  for(var i = 0; i < global.answers.length; i++){
    if(global.answers[i] == date){
      info = global.answers[i+1];
      break;
    }
  }
  return info.split(",");
}

export function addToArray() {
  if(pickedDate != null && answer != null){
    answers.push(pickedDate);
    answers.push(answer);

    allDates.push(pickedDate);
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
  row:{
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
