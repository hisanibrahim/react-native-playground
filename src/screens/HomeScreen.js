import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import layoutStyles from '../../assets/styles';
import HomeButton from '../components/HomeButton';
const HomeScreen = ({navigation}) => {
  // Passing navigate() as call back function via props to child
  return (
    <View style={layoutStyles.sectionContainer}>
      <HomeButton
        navigate={() => navigation.navigate('Color')}
        title="Goto Color Screen"
      />

      <HomeButton
        navigate={() => navigation.navigate('ImageScreen')}
        title="Goto Image Screen"
      />
      {/* <HomeButton
        navigate={() => navigation.navigate('Second')}
        title="Goto Second Screen"
      /> */}
      <HomeButton
        navigate={() => navigation.navigate('Counter')}
        title="Goto Counter Screen"
      />
    </View>
  );
};

export default HomeScreen;
