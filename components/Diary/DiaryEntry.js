import React from 'react';
import { Text, TouchableOpacity, Button, View, Alert, ScrollView } from 'react-native';

import { styles } from './diaryConfig';
import { getAnswers } from './diaryConfig';
import { deleteEntry } from './diaryConfig';
import './diaryConfig';

//'2017-10-26': {dots: [massage, workout], disabled: true}
export default function DiaryEntry({ navigation }) {
  global.info = getAnswers(pickedDate, global.info);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#9370DB' }}>
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
          <Text style={styles.text}>3. At what time did you wake up?</Text>
          <Text style={styles.text}>{global.info[2]} </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.text}>4. How long did it take you to get out of bed?</Text>
          <Text style={styles.text}>{global.info[3]} </Text>
        </View>
        <View style={styles.row}>
          <Button
            title="Edit"
            onPress={() => navigation.push('Edit', {
              itemId: 86,
              otherParam: global.info,
            })
            }
          />
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

