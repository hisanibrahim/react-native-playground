import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import AdjustColorScreen from './src/screens/AdjustColorScreen';
import TextScreen from './src/screens/TextScreen';
import StyleBoxScreen from './src/screens/StyleBoxScreen';

const initialStackNavigator = createStackNavigator(
  //root stack navigator where all screen defined
  {
    Home: HomeScreen,
    Second: SecondScreen,
    ImageScreen: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    AdjustColor: AdjustColorScreen,
    TextScreen,
    StyleBoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Hisanz React-native Playground',
    },
  },
);

export default createAppContainer(initialStackNavigator);
