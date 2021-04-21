import * as React from 'react';
import {View, Text , Dimensions,Image, StyleSheet, TouchableOpacity,Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";



function GraphScreen({ navigation }) {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
    return (

     <View style={styles.container}>
     <LinearGradient colors={['#003049','#581a87']} style={{flex:1}}>

<View>
 
  <LineChart
    data={{
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat","Sun"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
   // yAxisLabel="h"
    yAxisSuffix="h"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#581a87",
      backgroundGradientFrom: "#581a87",
      backgroundGradientTo: "#2D187E",
// decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius:50
      },
      propsForDots: {
        r: "6",
        strokeWidth: "3",
        stroke: "#2D187E"
      }
    }}
    bezier
    style={{
      marginVertical: 10,
      borderRadius: 8
    }}
  />
</View>




<Text style={styles.textHeader}> 5 Tips for a Better Night's Sleep{' >'} </Text>

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
</LinearGradient>
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
      color: "white",
      marginTop: 20,
      fontSize: 17,
      marginHorizontal: 10,
    }
    
    




  });
