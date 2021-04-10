import React from 'react';
import { Text, TouchableOpacity, Button, View } from 'react-native';

import { styles } from './diaryConfig';
import { getAnswers } from './diaryConfig';
import { deleteEntry } from './diaryConfig';
import './diaryConfig';

//'2017-10-26': {dots: [massage, workout], disabled: true}
export default function DiaryEntry({ navigation }) {
  info = getAnswers(pickedDate, info);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor: '#9370DB'}}>
      <Text style={styles.text}>Your diary entry for {pickedDate} !, {answers.length}</Text>

      <View style ={styles.column}>
              <Text style={styles.text}>1. What time did you go to bed?</Text>
              <Text style={styles.text}>{info[0]}</Text>
      </View>
      <View style ={styles.column}>
              <Text style={styles.text}>2. When did you fall asleep?</Text>
              <Text style={styles.text}>{info[1]} </Text>
      </View>
      <View style ={styles.column}>
              <Text style={styles.text}>3. At what time did you wake up?</Text>
              <Text style={styles.text}>{info[2]} </Text>
      </View>
      <View style ={styles.column}>
              <Text style={styles.text}>4. At what time did you get out of bed?</Text>
              <Text style={styles.text}>{info[3]} </Text>
      </View>
      <View style = {styles.row}>
      <Button
        title="Edit"
        onPress={() => navigation.push('Edit', {
          itemId: 86,
          otherParam: info,
        })
      }
      />
       <Button
        title="Delete"
        onPress={() =>  Alert.alert(
          "Alert",
          "Are you sure you want to delete?",
          [
            {
              text: "Cancel",
              onPress: () => navigation.push('Calendar Screen')
            },
            { text: "OK", onPress: () => deleteEntry(pickedDate, navigation)}
          ]
        )}
      />
      </View>
    </View>
  );
}

