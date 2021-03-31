import React, {useState} from 'react';  
import {StyleSheet, Text, View} from 'react-native';

export default function SleepScreen() {
  return (  
    <View style={styles.container}>       
      <Text>Sleep Screen</Text>       
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

