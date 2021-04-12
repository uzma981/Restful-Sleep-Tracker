import React from 'react';
import {Image, TextInput, View, Text, StyleSheet,TouchableOpacity, ImageBackground} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import image from '../images/image.jpg';


const SignUpScreen =({navigation}) =>{
return (
      <View style={{backgroundColor:"#FFF",height:"100%"}}>
          <Image source ={require('../images/logo2.png')}
              style={{width: 150,
                  height: 150,
                  resizeMode: 'cover',
                  marginTop: 100,
                  alignSelf:"center"
           }}
          />

                <View style={styles.backButton} >
    <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} //i have to fix this
    style={[styles.signIn,{
        marginTop: -180,
        left: 20,
        position: 'absolute'
    }]}>
    <Text style={[styles.textSign,
            {
                color:'black'

            }]}> {'<'}Back </Text>
        </TouchableOpacity>
        </View>
                <Text
                 style={{
                     fontSize:30,
                     alignSelf:"center",
                     marginTop:50
                 }}
                >Registration</Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:40,
                    paddingHorizontal:10,
                    borderColor:"#9370DB",
                    borderRadius:23,
                    paddingVertical:10
                }}>
                    <MaterialCommunityIcons name="email-outline" size={24} color="#BBBBFF" />
                  
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#9370DB"
                        fontSize="15"
                        style={{paddingHorizontal:10}}
                    />

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#9370DB",
                    borderRadius:23,
                    paddingVertical:10
                }}>
                   <AntDesign name="lock" size={24} color="#BBBBFF" />
                
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#9370DB"
                        fontSize="15"
                        style={{paddingHorizontal:10}}
                    />

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#9370DB",
                    borderRadius:23,
                    paddingVertical:10
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#9370DB"
                        fontSize="15"
                        style={{paddingHorizontal:10}}
                    />
                    

                </View>
                <TouchableOpacity>
                <View style={{
                    marginHorizontal:140,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#9370DB",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                        fontSize:18
                    }}>Register</Text>
                </View>
              </TouchableOpacity>
            
    <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
  <Text style={styles.signupText}>Already have an account? Sign In</Text>
</TouchableOpacity>
</View>
        
        )
};

export default SignUpScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
    },
    signupText:{
        color:"black",
        marginTop:30,
        marginBottom:10,
        alignSelf: "center"
      },
});
