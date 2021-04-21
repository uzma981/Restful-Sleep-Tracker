import React, { useState } from 'react';
import {Image, TextInput, View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import * as users from '../../database/users.json';
import * as FileSystem from 'expo-file-system';




export default function SignUpScreen({navigation}){

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  

  const onRegisterPressed = () => {
    if (email.value=="" || password.value=="") {
        //in the same label
      console.log("Please fill in all the required fields.") 
    }
    else {
      if (!email.value.includes("@")){ 
          //label.set value with the text below
          console.log('The email address is not valid') 
      }
      else {
          check=false;
        users.users.map((item)=> {
          if (email.value==item.email){
              check=true;
            navigation.navigate('Home'); //code to navigate to the main page
          }
          if (check) {
              console.log("User already exist.")
          }
          else {
              var user= {email: email.value, password: password.value}
              var myJSON=JSON.stringify(user)
              users.users.push(myJSON) 
              var newUsersList = JSON.stringify(users); 
              FileSystem.writeAsStringAsync(FileSystem.documentDirectory + '../database/users.json', newUsersList);
          }
        })
      }
    }
  }

return (
  
  <View style={styles.container}>
        <View style={styles.header}>
      <Image source={require('../images/image1.jpg')} />
    </View>
                <Image source ={require('../images/logo2.png')}
                    style={{width: 150,
                        height: 150,
                        marginTop:150,
                        marginBottom: 150,
                        resizeMode: 'cover',
                        alignSelf:"center"
                 }}
                />
    
                <View style={styles.backButton} >
    <TouchableOpacity onPress={()=>navigation.navigate('SignIn')} //i have to fix this
    style={[styles.signIn,{
        marginTop: -370,
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
                     marginTop:-120,
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
                        returnKeyType="next"
                        value={email.value}
                        onChangeText={(text) => setEmail({ value: text, error: '' })}
                        error={!!email.error}
                        errorText={email.error}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
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
                        returnKeyType="done"
                        value={password.value}
                        onChangeText={(text) => setPassword({ 
                        value: text, error: '' })}
                        error={!!password.error}
                        errorText={password.error}
            
                    />

                </View>
                <TouchableOpacity onPress={onRegisterPressed} style={styles.registerBtn}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
  <Text style={styles.signupText}>Already have an account? Sign In</Text>
</TouchableOpacity>
</View>

        
        )
};


const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "column"
        //alignItems:'center',
        //justifyContent:'center',
      //flexDirection: 'column',
    },
    signupText:{
        color:"black",
        marginTop:-120,
        marginBottom:400,
        alignSelf: "center"
    },
    registerBtn:{
      width:"40%",
      backgroundColor:"#9370DB",
      borderRadius:25,
      height:40,
      alignItems:"center",
      justifyContent:"center",
      marginTop:50,
      marginBottom:250,
      alignSelf: "center"
    },
    registerText:{
      color:"white",
      alignItems: "center",
    },
    header: {
      flex: 1,
      height: "100%",
      width: "100%",
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
});

// import React, { useState } from 'react';
// import {Image, TextInput, View, Text, StyleSheet,TouchableOpacity} from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons'; 
// import { AntDesign } from '@expo/vector-icons';
// import * as users from '../../database/users.json';
// import * as FileSystem from 'expo-file-system';


// export default function SignUpScreen({navigation}){

//   const [email, setEmail] = useState({ value: '', error: '' })
//   const [password, setPassword] = useState({ value: '', error: '' })
  

//   const onRegisterPressed = () => {
//     if (email.value=="" || password.value=="") {
//         //in the same label
//       console.log("Please fill in all the required fields.") 
//     }
//     else {
//       if (!email.value.includes("@")){ 
//           //label.set value with the text below
//           console.log('The email address is not valid') 
//       }
//       else {
//           check=false;
//         users.users.map((item)=> {
//           if (email.value==item.email){
//               check=true;
//             navigation.navigate('SignInScreen'); //code to navigate to the main page
//           }
//           if (check) {
//               console.log("User already exist.")
//           }
//           else {
//               var user= {email: email.value, password: password.value}
//               var myJSON=JSON.stringify(user)
//               users.users.push(myJSON) 
//               var newUsersList = JSON.stringify(users); 
//               FileSystem.writeAsStringAsync(FileSystem.documentDirectory + '../../database/users.json', newUsersList);
//           }
//         })
//       }
//     }
//   }


//   // https://www.npmjs.com/package/react-native-fs
//   // RNFS.writeFile(filePath, YOUR_TEXT, 'utf8')
//   //       .then((success) => {
//   //         console.log('SUCCESS');
//   //       })
//   //       .catch((err) => {
//   //         console.log(err.message);
//   //       });




// return (

//             <View style={{backgroundColor:"#FFF",height:"100%"}}>
//                 <Image source ={require('../images/logo2.png')}
//                     style={{width: 150,
//                         height: 150,
//                         resizeMode: 'cover',
//                         marginTop: 100,
//                         alignSelf:"center"
//                  }}
//                 />
    
//                 <View style={styles.backButton} >
//     <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')} //i have to fix this
//     style={[styles.signIn,{
//         marginTop: -180,
//         left: 20,
//         position: 'absolute'
//     }]}>
//     <Text style={[styles.textSign,
//             {
//                 color:'black'

//             }]}> {'<'}Back </Text>
//         </TouchableOpacity>
//         </View>
//                 <Text
//                  style={{
//                      fontSize:30,
//                      alignSelf:"center",
//                      marginTop:50
//                  }}
//                 >Registration</Text>

//                 <View style={{
//                     flexDirection:"row",
//                     alignItems:"center",
//                     marginHorizontal:55,
//                     borderWidth:2,
//                     marginTop:40,
//                     paddingHorizontal:10,
//                     borderColor:"#9370DB",
//                     borderRadius:23,
//                     paddingVertical:10
//                 }}>
//                     <MaterialCommunityIcons name="email-outline" size={24} color="#BBBBFF" />
                  
//                     <TextInput 
//                         placeholder="Email"
//                         placeholderTextColor="#9370DB"
//                         fontSize="15"
//                         style={{paddingHorizontal:10}}
//                         returnKeyType="next"
//                         value={email.value}
//                         onChangeText={(text) => setEmail({ value: text, error: '' })}
//                         error={!!email.error}
//                         errorText={email.error}
//                         autoCapitalize="none"
//                         autoCompleteType="email"
//                         textContentType="emailAddress"
//                         keyboardType="email-address"
//                     />

//                 </View>
//                 <View style={{
//                     flexDirection:"row",
//                     alignItems:"center",
//                     marginHorizontal:55,
//                     borderWidth:2,
//                     marginTop:15,
//                     paddingHorizontal:10,
//                     borderColor:"#9370DB",
//                     borderRadius:23,
//                     paddingVertical:10
//                 }}>
//                    <AntDesign name="lock" size={24} color="#BBBBFF" />
                
//                    <TextInput 
//                         secureTextEntry
//                         placeholder="Password"
//                         placeholderTextColor="#9370DB"
//                         fontSize="15"
//                         style={{paddingHorizontal:10}}
//                         returnKeyType="done"
//                         value={password.value}
//                         onChangeText={(text) => setPassword({ 
//                         value: text, error: '' })}
//                         error={!!password.error}
//                         errorText={password.error}
            
//                     />

//                 </View>
//                 <TouchableOpacity onPress={onRegisterPressed} style={styles.loginBtn}>
//           <Text style={styles.registerText}>Register</Text>
//         </TouchableOpacity>
//     <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
//   <Text style={styles.signupText}>Already have an account? Sign In</Text>
// </TouchableOpacity>
// </View>
        
//         )
// };


// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems:'center',
//         justifyContent:'center',
//         flexDirection: 'column',
//     },
//     signupText:{
//         color:"black",
//         marginTop:30,
//         marginBottom:10,
//         alignSelf: "center"
//       },
//       loginBtn:{
//         width:"40%",
//         backgroundColor:"#9370DB",
//         borderRadius:25,
//         height:40,
//         alignItems:"center",
//         justifyContent:"center",
//         marginTop:40,
//         marginBottom:10,
//         marginHorizontal:140,
//         alignItems:"center",
//         justifyContent:"center",
//         marginTop:30,
//         backgroundColor:"#9370DB",
//         paddingVertical:10,
//         borderRadius:23
//       },
//       registerText:{
//         color:"white"
//       }
// });
