import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './Home/homeScreen';
import AlarmScreen from './Home/alarm';
import ActivityScreen from './Home/activity';
import SleepScreen from './Home/sleep';

import DiaryScreen from './Diary/diaryScreen';
import GraphScreen from './Graph/graphScreen';
import SettingsScreen from './Settings/settingsScreen';

const HomeStack = createStackNavigator();
let HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Activity" component={ActivityScreen} />
      <HomeStack.Screen name="Alarm" component={AlarmScreen} />
      <HomeStack.Screen name="Sleep" component={SleepScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } 
            else if (route.name === 'Diary') {
              iconName = focused ? 'book' : 'book-outline';
            }
            else if (route.name === 'Graph') {
              iconName = focused ? 'analytics' : 'analytics-outline';
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Diary" component={DiaryScreen} />
        <Tab.Screen name="Graph" component={GraphScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
