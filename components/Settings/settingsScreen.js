import React, {useState} from 'react';  
import {StyleSheet, Text, View} from 'react-native';
 
export default function SettingsScreen() {
  return (  
    <View style={styles.container}>       
      <Text>SettingsScreen</Text>       
    </View>  
  );  
}

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      flexDirection: 'column',
      justifyContent: 'center',  
      alignItems: 'center'  
  },  
});  

