import React from 'react';
import { Text, Button, View, Alert, ScrollView } from 'react-native';
import { styles, testHashMap } from './diaryConfig';
import { getAnswers } from './diaryConfig';
import { deleteEntry } from './diaryConfig';
import './diaryConfig';

export default function DiaryEntry({ navigation }) {
  global.info = getAnswers(pickedDate, global.info);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2D187E' }}>
        <Text style={styles.text}>Your diary entry for {pickedDate} !</Text>
        <View style={styles.column}>
          <Text style={styles.text}>1. What time did you go to bed?</Text>
          <Text style={styles.text}>{global.info[0]}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>2. How long did it take you to fall asleep?</Text>
          <Text style={styles.text}>{global.info[1]} </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>3. What time did you wake up?</Text>
          <Text style={styles.text}>{global.info[2]} </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>4. How long did it take you to get out of bed?</Text>
          <Text style={styles.text}>{global.info[3]} </Text>
        </View>
        <View style={styles.column}>
          <Button
            title="Edit"
            onPress={() => navigation.push('Edit', {
              itemId: 86,
              otherParam: global.info,
            })
            }
          />
          <Text></Text>
          <Button
            title="Delete"
            onPress={() => Alert.alert(
              "Alert",
              "Are you sure you want to delete?",
              [
                {
                  text: "Cancel",
                  onPress: () => navigation.push('Calendar')
                },
                { text: "OK", onPress: () => deleteEntry(pickedDate, navigation) }
              ]
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

