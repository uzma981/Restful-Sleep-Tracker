import * as React from 'react';
import {View, Text , Dimensions,Image, StyleSheet, TouchableOpacity,Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';

import SleepInfo from './sleepInfo';
import { loadSleepData, getSleepToWakeUpTime, getBedToSleepTime } from '../config';
import '../config';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default function GraphScreen({ navigation }) {

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

  const chartConfig2 = {
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
  };

  const data1 = {
    labels: Object.keys(global.sleepObjects), // x
    datasets: [
      {
        data: getBedToSleepTime(), // value plotted
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Sleep"] // optional
  };

  const data2 = {
    labels: Object.keys(global.sleepObjects), // x
    datasets: [
      {
        data: getSleepToWakeUpTime(), // value plotted
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Sleep"] // optional
  };

  const screenWidth = Dimensions.get("window").width;

  return (
   <View style={styles.container}>
     <ScrollView>
     <LinearGradient colors={['#003049','#581a87']} style={{flex:1}}>

      <View>
        <LineChart
          data={data1}
          width={screenWidth}
          height={220}
          yAxisSuffix="h"
          chartConfig={chartConfig}
        />
      </View>

      <View>
        <LineChart
          data={data2}
          width={screenWidth} // from react-native
          height={220}
         // yAxisLabel="h"
          yAxisSuffix="h"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig2}
          bezier
          style={{
            marginVertical: 10,
            borderRadius: 8
          }}
        />
      </View>

      <SleepInfo />
    </LinearGradient>
    </ScrollView>
    </View>
  );
};

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
