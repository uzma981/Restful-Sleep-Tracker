import React from 'react';

import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const SignInScreen =({navigation}) => {

  return (
      <View style={styles.container}>
        <View style={styles.skipButton}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}
        style={[styles.signIn,{
            marginTop: 50,
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
            
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="white"
            
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <Text
              onPress={() => console.log('g')}
              style={{
                position: 'relative',
                top: '1%',
                fontWeight: 'bold',
                fontSize: 12
              }} >
              OR LOGIN WITH SOCIAL MEDIA ACCOUNT?
          </Text>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              bottom: 30,
              justifyContent: 'space-evenly',
              top: '10%',
              width: 200
            }} >
              <TouchableOpacity activeOpacity={0.5} >
                <Image source={
                  { uri: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/facebook-512.png' }}
                  style={{
                    width: 40,
                    height: 40,
                  }} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} >
                <Image source={
                  { uri: 'https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA' }}
                  style={{
                    width: 40,
                    height: 40,
                  }} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}>
          <Text style={styles.signupText}>Don't have an account? SignUp</Text>
        </TouchableOpacity>
          </View >
    );
  };

export default SignInScreen;

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
