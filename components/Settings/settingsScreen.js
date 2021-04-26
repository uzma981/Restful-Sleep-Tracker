import React, {useState, useEffect} from 'react';  
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Button, TextInput, Image, } from 'react-native';

import {styles, saveProfile} from './settingsConfig.js';
import { Picker } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*let options = {
  title: 'Select Image',
  customButtons: [
    { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

/**
* The first arg is the options object for customization (it can also be null or omitted for default options),
* The second arg is the callback which sends object: response (more info in the API Reference)
*/
/*ImagePicker.showImagePicker(options, (response) => {
console.log('Response = ', response);

if (response.didCancel) {
console.log('User cancelled image picker');
} else if (response.error) {
console.log('ImagePicker Error: ', response.error);
} else if (response.customButton) {
console.log('User tapped custom button: ', response.customButton);
} else {
const source = { uri: response.uri };

// You can also display the image using data:
// const source = { uri: 'data:image/jpeg;base64,' + response.data };

this.setState({
 filePath: response,
 fileData: response.data,
 fileUri: response.uri
});
}
});*/
export default function SettingsScreen({navigation}) {

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

  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [number3, onChangeNumber3] = React.useState(null);
  const [number4, onChangeNumber4] = React.useState(null);
  const [number5, onChangeNumber5] = React.useState(null);

  const [selectedGender, setSelectedGender] = useState();
  return (  
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1,  justifyContent: 'center', backgroundColor: '#2D187E' }}>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Take an image with camera" onPress={takeImage} />
      {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 , borderRadius: 360}} />}
    </View>

       { /*<Image 
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
          }} 
          style={{width: 200, height: 200, borderRadius: 200/ 2}} 
        />*/}
          <View style={styles.row}>
          <Text style={styles.text}>First Name</Text>
          <TextInput
                style={styles.input}
                onChangeText={onChangeNumber1}
                value={number1}
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
            <View style={{backgroundColor: 'white', marginTop: 15, borderRadius:10, borderWidth: 1, borderColor:'black'}}> 
            <Picker
            
          style={{height:30, width:150}}
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
                value={number5}
                textAlign={'center'}
                keyboardType="email-address"
              />
            </SafeAreaView>
            
          
          </View>
          <View style={{width:'20%', marginLeft:'40%'}}>
          <Button
          
            title="Submit"
            onPress={() => {
              if(emailReg.test(number5)){
                if (number1 !=null && number2 != null && number3 != null && selectedGender != undefined && number5 != null ) {
                    saveProfile(number1,number2,number3,selectedGender, number5);
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
            }else{
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



