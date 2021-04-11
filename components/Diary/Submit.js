import React from 'react';
import {Text, View, Button} from 'react-native';

import { styles } from './diaryConfig';
import { addToArray } from './diaryConfig';

export default function Submit({ navigation }) {
  addToArray({})
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#9370DB' }}>
      <Text style={styles.text}>Good job! You successfully submited your diary entry!</Text>
      <Button
        title="Ok"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'Calendar',
              },
            ],
          })
        }
      />
    </View>
  );
}
