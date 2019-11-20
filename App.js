import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import SecondScreen from './src/screens/SecondScreen'
import ImageScreen from './src/screens/ImageScreen'

const initialStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Second: SecondScreen,
    ImageScreen: ImageScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
)

export default createAppContainer(initialStackNavigator)
