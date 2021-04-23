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
import SignInScreen from './Login/loginScreen';
import SignUpScreen from './Login/SignUpScreen';
import ForgotPasswordScreen from './Login/ForgotPasswordScreen';

import TabComponent from './tab';

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
};

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
};

const GraphStack = createStackNavigator();
let GraphStackScreen = () => {
  return (
    <GraphStack.Navigator>
      <GraphStack.Screen name="Graph" component={GraphScreen} />
    </GraphStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();
let SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
let TabNavigationScreens = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        style: {
          backgroundColor: '#9370DB',
        }
      }}>
      <Tab.Screen
        name="Home" 
        component={HomeStackScreen} 
        options={{
          tabBarButton: (props) => <TabComponent label="home" {...props} />
        }}
      />
      <Tab.Screen 
        name="Diary" 
        component={DiaryStackScreen} 
        options={{
          tabBarButton: (props) => <TabComponent label="book" {...props}/>
        }}
      />
      <Tab.Screen 
        name="Graph" 
        component={GraphStackScreen} 
        options={{
          tabBarButton: (props) => <TabComponent label="analytics" {...props}/>
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsStackScreen} 
        options={{
          tabBarButton: (props) => <TabComponent label="list" {...props}/>
        }}
      />
    </Tab.Navigator>
  );
};
