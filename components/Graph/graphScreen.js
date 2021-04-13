import * as React from 'react';
import {View, Text , Image, StyleSheet, TouchableOpacity,Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';





function GraphScreen({ navigation }) {


    return (

     <View style={styles.container}>
<Text style={styles.textHeader}> 5 Tips for a Better Night's Sleep </Text>

<ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: 10, marginTop: 10 }}>

<TouchableOpacity onPress={()=>Linking.openURL('https://www.webmd.com/sleep-disorders/features/reset-sleep-cycle')}>
<View style={styles.boxone} >
<Image source={require("../images/clock.jpg")} style={styles.img}/>
<Text style={styles.text}>Internal Clock</Text>
<View style={styles.boxtwo}></View>
</View>
</TouchableOpacity>

 <TouchableOpacity onPress={()=>Linking.openURL('https://www.sleepfoundation.org/nutrition/caffeine-and-sleep#:~:text=The%20recommended%20cut%2Doff%20time,can%20help%20minimize%20sleep%20problems.')}>
<View style={styles.boxone} >
<Image source={require("../images/coffeeintake.jpg")} style={styles.img}/>
<Text style={styles.text}>Coffee Intake</Text>
<View style={styles.boxtwo}></View>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>Linking.openURL('https://www.sleepfoundation.org/nutrition/food-and-drink-promote-good-nights-sleep')}>
<View style={styles.boxone} >
<Image source={require("../images/food.jpg")} style={styles.img}/>
<Text style={styles.text}>Food and Drinks</Text>
<View style={styles.boxtwo}></View>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>Linking.openURL('https://www.sleepfoundation.org/physical-activity/best-exercises-sleep')}>
<View style={styles.boxone} >
<Image source={require("../images/running2.png")} style={styles.img}/>
<Text style={styles.text}>Exercise</Text>
<View style={styles.boxtwo}></View>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>Linking.openURL('https://www.healthline.com/health/best-time-to-sleep#when-to-go-to-sleep')}>
<View style={styles.boxone} >
<Image source={require("../images/moon.jpg")} style={styles.img}/>
<Text style={styles.text}>Sleep Patterns</Text>
<View style={styles.boxtwo}></View>
</View>
</TouchableOpacity>
</ScrollView>

  </View>
 





     
        
    
    );
  };

  export default GraphScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
  
  
    boxone:{
      backgroundColor: "#2D187E",
      height: 200,
      width: 190,
      borderRadius: 15,
      padding: 5,
      marginHorizontal:10,
    },
    boxtwo:{
      flexDirection: "row",
      width: 150,
      alignItems: "center",
      paddingHorizontal: 5,
        paddingVertical: 5,
    },
  
    text:{
      color: "white",
      marginTop: 20,
      fontSize: 17,
      marginHorizontal: 10,
      
    },
    img:{
      width: 180, 
      borderRadius: 10,
      height: 130 ,
      
    },
    textHeader:{
      color: "black",
      marginTop: 20,
      fontSize: 17,
      marginHorizontal: 10,
    }
    
    




  });
