import React, {useState} from 'react';  
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Button, TextInput, Image, } from 'react-native';

import {styles, saveProfile} from './settingsConfig.js';
import {Picker} from '@react-native-picker/picker';

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



