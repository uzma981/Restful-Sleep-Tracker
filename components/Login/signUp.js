import React from 'react';

import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const RegistrationScreen =({navigation}) => {

  return (
      <View style={styles.container}>
        <View style={styles.header}>
      <Image source={require('../images/image1.jpg')} />
    </View>
        <View style={styles.backButton} >


    <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} 
    style={[styles.signIn,{
        marginTop: 35,
        left: 10,
        position: 'absolute'
    }]}>
    
    <Text style={[styles.textSign,
            {
                color:'black'

            }]}> {'<'} Back </Text>
            

        </TouchableOpacity>
        </View>
        <Text style={styles.logo}>Register</Text>

<Image source ={require('../images/logo2.png')}
                    style={{width: 150,
                        height: 150,
                        // marginTop:5,
                         marginBottom: 10,
                        resizeMode: 'cover',
                        alignSelf:"center"
                 }}
                />






        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="white"
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="white" 
            secureTextEntry
            />
        </View>

        {/* <TextInput 
                       
                        placeholder="Password"
                        placeholderTextColor="#9370DB"
                        fontSize="15"
                        style={{paddingHorizontal:10}}
                        // returnKeyType="done"
                        // value={password.value}
                        // onChangeText={(text) => setPassword({ 
                        // value: text, error: '' })}
                        // error={!!password.error}
                        // errorText={password.error}
            
                    /> */}





        <TouchableOpacity style={styles.resetBtn}>
          <Text style={styles.resetText}>Register</Text>
        </TouchableOpacity>
        
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
            {/* change */}
          <Text style={styles.signupText}>Have an account? Sign in</Text>
        </TouchableOpacity>
          </View>
    );
  };

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo:{
    fontWeight:"bold",
    fontSize:25,
    color:"white",
    marginTop:50,
    marginBottom:20,
    textAlign: "left",
    alignSelf: "center"
  },
  inputView:{
    width:"80%",
    backgroundColor:"#9370DB",
    borderRadius:25,
    height:50,
    marginTop:10,
    marginBottom:10,
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
    marginTop:50,
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
