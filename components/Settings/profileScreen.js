import React, {useState} from 'react';  
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Button, TextInput, Image, Alert} from 'react-native';

import {styles, deleteProfile} from './settingsConfig.js';

export default function ProfileScreen({navigation}) {
 
  return (  
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1,  justifyContent: 'center', backgroundColor: '#2D187E' }}>

        <Image 
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
          }} 
          style={{width: 200, height: 200, borderRadius: 200/ 2}} 
        />
        <Text>Hello, {global.profile.get("name")}</Text>

        <View style={styles.row}>
          <Button
            title="Edit"
            onPress={() => navigation.push('EditProfile', {
              itemId: 86,
              //otherParam: global.info,
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



