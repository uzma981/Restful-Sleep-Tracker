import React, {useState} from 'react';  
import {StyleSheet, Text, View} from 'react-native';
 
export default function GraphScreen() {
  return (  
    <View style={styles.container}>       
      <Text>GraphScreen</Text>       
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

