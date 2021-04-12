import React,{useState} from 'react'
import {StyleSheet, Text,View,TextInput,Button} from 'react-native';


export default function AddActivity({submitHandler}) {


//keep track of what a user types in
const[text,setText]=useState('');

const changeHandler=(val)=>
{
    setText(val)
}



return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='new activity...'
        onChangeText={changeHandler} 
       // value={text} 
      />
      <Button onPress={() =>submitHandler(text)} title='Submit' color='#9370DB'/>
    </View>
  )
  }
  
const styles = StyleSheet.create({
    input: {
      paddingHorizontal: 8,
      paddingVertical:6,
      
      marginBottom: 10,
      borderBottomWidth:1,
      borderBottomColor:'#ddd'
   
    }
  });
  