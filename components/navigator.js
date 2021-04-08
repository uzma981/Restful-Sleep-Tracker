import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './Home/homeScreen';
import AlarmScreen from './Home/alarm';
import ActivityScreen from './Home/activity';
import SleepScreen from './Home/sleep';

import CalendarScreen from './Diary/Calendar';
import SubmitScreen from './Diary/Submit';
import QuestionsScreen from './Diary/Questions';
import DiaryEntryScreen from './Diary/DiaryEntry';
import EditScreen from './Diary/Edit';

import GraphScreen from './Graph/graphScreen';

import SettingsScreen from './Settings/settingsScreen';

import SplashScreen from './splashscreen';
import SignInScreen from './Login/LoginScreen';
import SignUpScreen from './Login/SignUpScreen';
import ForgotPasswordScreen from './Login/ForgotPasswordScreen';

const Drawer = createDrawerNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Splash">
        <Drawer.Screen name="Splash" component={SplashScreen} />
        <Drawer.Screen name="SignIn" component={SignInScreen} />
        <Drawer.Screen name="SignUp" component={SignUpScreen} />
        <Drawer.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Drawer.Screen name="Home" component={TabNavigationScreens} />
        <Drawer.Screen name="Sleep" component={SleepScreen} />
        <Drawer.Screen name="Alarm" component={AlarmScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = createStackNavigator();
let HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Activity" component={ActivityScreen} />
      <HomeStack.Screen name="Alarm" component={AlarmScreen} />
    </HomeStack.Navigator>
  );
}

const DiaryStack = createStackNavigator();
let DiaryStackScreen = () => {
  return (
    <DiaryStack.Navigator initialRouteName="Calendar">
      <DiaryStack.Screen name="Calendar" component={CalendarScreen} />
      <DiaryStack.Screen name="Submit" component={SubmitScreen} />
      <DiaryStack.Screen name="Questions" component={QuestionsScreen} />
      <DiaryStack.Screen name="Diary Entry" component={DiaryEntryScreen} />
      <DiaryStack.Screen name="Edit" component={EditScreen} />
    </DiaryStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
let TabNavigationScreens = () => {
  return (
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
      <Tab.Screen name="Diary" component={DiaryStackScreen} />
      <Tab.Screen name="Graph" component={GraphScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
