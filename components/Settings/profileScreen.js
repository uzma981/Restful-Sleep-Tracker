import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Button, Image, Alert } from 'react-native';

import { styles, deleteProfile } from './settingsConfig.js';

export default function ProfileScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#2D187E' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
            <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 360 }} />
          </View>
          <Text style={styles.text}>Hello, {global.profile.get("name")}</Text>

          <View style={styles.column, { marginTop: '50%', width: '20%', marginLeft: '40%' }}>
            <Button
              title="Edit"
              onPress={() => navigation.push('EditProfile', {
                itemId: 86,
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
                    onPress: () => navigation.push('Profile')
                  },
                  { text: "OK", onPress: () => deleteProfile(navigation) }
                ]
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



