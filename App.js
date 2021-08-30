import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {CustomDrawerContent} from './src/components/navigation/CustomDrawerContent';
import {CustomDrawerIcon} from './src/components/navigation/CustomDrawerIcon';
import { StyleSheet, Text, View } from 'react-native';
import {WelcomeScreen} from './src/components/screens/WelcomeScreen';
import { NotificationScreens } from './src/components/screens/NotificationScreen';
import { ProfileScreen } from './src/components/screens/ProfileScreen';
import { HomeScreens } from './src/components/screens/HomeScreen';
import Header from './src/components/header/Header';
import { GRAY, LIGHT_GRAY, WHITE } from './src/style';
import {SpinnerScreen} from './src/components/screens/Spinner';
import CompletedScreens from './src/components/screens/CompletedScreen';
import { DetailsScreen } from './src/components/screens/DetailsScreen';
import { JobScreen } from './src/components/screens/JobScreen';
import { TimerScreen } from './src/components/screens/TimerScreen';
import { BillScreen } from './src/components/screens/BillScreen';
import { CustomDrawerNavigationIcon } from './src/components/navigation/CustomDrawerNavigationIcon';

//headerLeft: (props) => <Header  {...props} />,

export default function App() {

  const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

  function DrawerNavigator () {
    return (
      <Drawer.Navigator  drawerType={'front'} drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen 
          name="Account" 
          component={ProfileScreen} 
          options={{ headerShown: true, title:"LOX", drawerIcon:({color}) => <CustomDrawerIcon iconName={'account-circle-outline'} color={color} /> }} 
        />
         <Drawer.Screen 
          name="Home" 
          component={HomeScreens} 
          options={ { header:(props) => <Header {...props} />, drawerIcon:({color}) => <CustomDrawerIcon iconName={'home-circle-outline'} color={color} /> }} 
        />
        <Drawer.Screen 
          name="Notification" 
          component={NotificationScreens} 
          options={{ header:(props) => <Header {...props} />, drawerIcon:({color}) => <CustomDrawerNavigationIcon color={color} /> }} 
        />
       <Drawer.Screen 
          name="Details"
          component={DetailsScreen} 
          options={{ headerShown: true, drawerActiveTintColor: WHITE, drawerLabel: () => null, title: null, drawerIcon: () => null}} 
        />
        <Drawer.Screen 
          name="Jobs"
          component={JobScreen} 
          options={{ headerShown: true, drawerActiveTintColor: WHITE, drawerLabel: () => null, title: null, drawerIcon: () => null }} 
        />
        <Drawer.Screen 
          name="Timer"
          component={TimerScreen} 
          options={{ headerShown: true, drawerActiveTintColor: WHITE, drawerLabel: () => null, title: null, drawerIcon: () => null}} 
        />
        <Drawer.Screen 
          name="Bill"
          component={BillScreen} 
          options={{ headerShown: true, drawerActiveTintColor: WHITE, drawerLabel: () => null, title: null, drawerIcon: () => null}} 
        />
      </Drawer.Navigator>
      
    );
  }

  return (
    <>
      <StatusBar style="auto" hidden />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Spinner"
            component={SpinnerScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="CompletedScreens"
            component={CompletedScreens}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}