import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../assets/styles';
import HomeButton from '../components/HomeButton';
const HomeScreen = props => {
  return (
    <View style={styles.sectionContainer}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Color')}>
        <Text style={styles.sectionTitle}>Goto Color Screen</Text>
      </TouchableOpacity>

      {/* TODO: Passing navigation function via props */}

      <HomeButton route="ImageScreen" title="Goto Image Screen" />
      <HomeButton route="Second" title="Goto Second Screen" />
      <HomeButton route="Counter" title="Goto Counter Screen" />
      <HomeButton route="ImageScreen" title="Goto Image Screen" />
      <HomeButton route="ColorScreen" title="Goto Color Screen" />
    </View>
  );
};

export default HomeScreen;
