import React from 'react';
import {View, Button,StatusBar, Image,Text,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import * as Animatable from 'react-native-animatable';

import Ionicons from 'react-native-vector-icons/Ionicons'

const SplashScreen =({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#000000' barStyle='light-content'/>
      <View style={styles.header}>
      <Image source={require('./images/backgroundPurple.jpg')} />
    </View>
  
    <Animatable.View style={styles.footer}
    animation='fadeInUpBig'>
      <Text style ={styles.title}>Sleep Tracker App </Text>
      <Text style ={styles.text}>Sign in with account</Text>
      <View styles = {styles.button}>
      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
         <LinearGradient
          colors={['#9370DB', '#BB8FCE']}
          style={styles.signIn}
         >
          <Text style={styles.textSign}>Get Started</Text>
          <Ionicons
          name='arrow-forward'
          color = '#fff'
          size={20}/>
        </LinearGradient> 
      </TouchableOpacity>
    </View>
    </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo =height *0.28;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#9370DB',
        height:'100%',
        width:'100%',
    },
    header:{
      
        flex:2,// getting 2/3 of screen
        alignItems:'center',
       // position: 'relative',
      
       justifyContent:'center'
    },
  
    footer:{
        flex:1,// 1/3 of our screen
        backgroundColor:'#fff',// white colour
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,

    },
    logo:{
        width:height_logo,
        height:height_logo
    },
    title:{
        color: '#000000',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});
