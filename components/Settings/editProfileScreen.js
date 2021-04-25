import React, {useState} from 'react';  
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Button, TextInput, Image, } from 'react-native';

import {styles, saveProfile} from './settingsConfig.js';


export default function EditProfileScreen({navigation}) {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [number3, onChangeNumber3] = React.useState(null);
  const [number4, onChangeNumber4] = React.useState(null);
  const [number5, onChangeNumber5] = React.useState(null);

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
          <View style={styles.row}>
          <Text style={styles.text}>First Name</Text>
          <TextInput
                style={styles.input}
                onChangeText={onChangeNumber1}
                value={number1}
                placeholder = {global.profile.get("name")}
                autoCapitalize = 'words'
                textAlign={'center'}
                keyboardType="default"
              />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Last Name</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber2}
                value={number2}
                placeholder = {global.profile.get("last")}
                autoCapitalize = 'words'
                textAlign={'center'}
                keyboardType="default"
              />
            </SafeAreaView>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Age</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber3}
                value={number3}
                placeholder = {global.profile.get("age")}
                maxLength= {2}
                textAlign={'center'}
                keyboardType="numeric"
              />
            </SafeAreaView>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Gender</Text>
            <View>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber4}
                placeholder = {global.profile.get("gender")}
                placeholderTextColor= 'grey'
                autoCapitalize= 'characters'
                value={number4}
                maxLength= {3}
                textAlign={'center'}
                keyboardType="default"
              />
            </SafeAreaView>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Email</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber5}
                placeholder = {global.profile.get("email")}
                value={number5}
                textAlign={'center'}
                keyboardType="email-address"
              />
            </SafeAreaView>
            
          </View>
          
          <Button
            title="Submit"
            onPress={() => {
              if (number1 !=null && number2 != null && number3 != null && number4 != null && number5 != null ) {
               saveProfile(number1,number2,number3,number4, number5);
             
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'Profile',
                    },
                  ],
                })
              } else {
                alert('Answer all questions!');
              }
            }
              /* navigation.reset({
                 index: 0,
                 routes: [
                   {
                     name: 'Submit',
                   },
                 ],
               })*/
            }
          />
            </View>
      </ScrollView>
    </SafeAreaView>
  );  
}



