import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as users from '../../database/users.json';


export default function SignInScreen({navigation}){
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    if (email.value=="" || password.value=="") {
      console.log("Please fill in all the required fields.") 
    }
    else {
      if (!email.value.includes("@")){
          console.log('The email address is not valid') 
      }
      else {
        users.users.map((item)=> {
          if (email.value==item.email && password.value==item.password){
            navigation.navigate('Home'); //code to navigate to the main page
          }
        })
      }
    }
  }

  return (
      <View style={styles.container}>
        <View style={styles.skipButton} >
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}
        style={[styles.signIn,{
            marginTop: -60,
            position: 'absolute'
        }]}>
        <Text style={[styles.textSign,
                {
                    color:'black'

                }]}>Skip {'>'}</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.logo}>Welcome Back!</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="white"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ 
            value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            />
        </View>
        <View style={styles.inputView} >
          <TextInput 
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="white"
            
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!password.error}
            errorText={password.error}
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLoginPressed} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        
            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
          <Text style={styles.signupText}>Don't have an account? SignUp</Text>
        </TouchableOpacity>
          </View >
    );
  };




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:35,
    color:"black",
    marginTop:200,
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#9370DB",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"black",
    fontSize:12
  },
  loginBtn:{
    width:"40%",
    backgroundColor:"#9370DB",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  signupText:{
    color:"black",
    marginTop:10,
    marginBottom:140
  },
  skipButton: {
    left: 140,
    top: 20,
  }
});
