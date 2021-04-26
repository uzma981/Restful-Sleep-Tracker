import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, ScrollView, Button, TextInput, Image, } from 'react-native';

import { styles, saveProfile } from './settingsConfig.js';
import { Picker } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function EditProfileScreen({ navigation }) {

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  const [number1, onChangeNumber1] = React.useState(global.profile.get("name"));
  const [number2, onChangeNumber2] = React.useState(global.profile.get("last"));
  const [number3, onChangeNumber3] = React.useState(global.profile.get("age"));
  const [number5, onChangeNumber5] = React.useState(global.profile.get("email"));
  const [selectedGender, setSelectedGender] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#2D187E' }}>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            <Text></Text>
            <Button title="Take an image with camera" onPress={takeImage} />
            {image && <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 360 }} />}
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>First Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber1}
              value={number1}
              placeholder={global.profile.get("name")}
              autoCapitalize='words'
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
                placeholder={global.profile.get("last")}
                autoCapitalize='words'
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
                placeholder={global.profile.get("age")}
                maxLength={2}
                textAlign={'center'}
                keyboardType="numeric"
              />
            </SafeAreaView>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Gender</Text>
            <View>
              <SafeAreaView>
                <View style={{ backgroundColor: 'white', marginTop: 15, borderRadius: 10, borderWidth: 1, borderColor: 'black' }}>
                  <Picker

                    style={{ height: 30, width: 150 }}
                    selectedValue={selectedGender}

                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedGender(itemValue)
                    }>
                    <Picker.Item label="Pick" value="" />
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Prefer not to answer" value="N/A" />
                  </Picker>
                </View>
              </SafeAreaView>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Email</Text>
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber5}
                placeholder={global.profile.get("email")}
                value={number5}
                textAlign={'center'}
                keyboardType="email-address"
              />
            </SafeAreaView>

          </View>

          <View style={{ width: '20%', marginLeft: '40%' }}>
            <Button

              title="Submit"
              onPress={() => {
                if (emailReg.test(number5)) {
                  if (number1 != null && number2 != null && number3 != null && selectedGender != undefined && number5 != null) {
                    saveProfile(number1, number2, number3, selectedGender, number5);
                    global.image = image;
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
                } else {
                  alert('Invalid email address!')
                }

              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



