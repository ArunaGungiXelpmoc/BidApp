import { View, Text } from 'react-native'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useIsFocused } from '@react-navigation/native';


const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props}/> : null
}

export default FocusedStatusBar;