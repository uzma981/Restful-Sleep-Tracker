import React from 'react';

import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const SignInScreen =({navigation}) => {

  return (
      <View style={styles.container}>
        <View style={styles.header}>
      <Image source={require('../images/image1.jpg')} />
    </View>
        <View style={styles.backButton} >
    <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} //i have to fix this
    style={[styles.signIn,{
        marginTop: -100,
        left: -180,
        position: 'absolute'
    }]}>
    <Text style={[styles.textSign,
            {
                color:'black'

            }]}> {'<'}Back </Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.logo}>Forgot Password</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="white"
            />
        </View>
        <TouchableOpacity style={styles.resetBtn}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
        
            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
          <Text style={styles.signupText}>Don't have an account? SignUp</Text>
        </TouchableOpacity>
          </View >
    );
  };

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFFFFF',
    //alignItems: 'center',
    // justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:25,
    color:"black",
    marginTop:100,
    marginBottom:40,
    textAlign: "left",
    alignSelf: "center"
  },
  inputView:{
    width:"80%",
    backgroundColor:"#9370DB",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    alignSelf: "center"
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"black",
    fontSize:12
  },
  resetBtn:{
    width:"40%",
    backgroundColor:"#9370DB",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom: 50,
    alignSelf:"center"
  },
  resetText:{
    color:"white"
  },
  signupText:{
    color:"black",
    marginTop:250,
    marginBottom:140,
    alignSelf: "center"
  },
  skipButton: {
    left: 140,
    top: 20,
  },
  header: {
    flex: 1,
    height: "100%",
    width: "100%",
  }
});



// import React from 'react';
// import { SafeAreaView, Formik, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// const ForgotPasswordScreen =({navigation}) =>{
//   return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Forgot Password Screen</Text>
//       </View>
//   )
// };

// export default ForgotPasswordScreen;
