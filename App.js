import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Screen02 from './Screen02';
import Screen01 from './Screen01';
import Screen03 from './Screen03';
import Screen04 from './Screen04';
import StackNavigator from './StackNavigator';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
