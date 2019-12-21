import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import layoutStyles from '../../assets/styles';

const HomeButton = ({title, navigate}) => {
  // recieving navigate() as call back function from parent and call when onPress */}
  return (
    <View>
      <TouchableOpacity onPress={() => navigate()}>
        <Text style={layoutStyles.sectionTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeButton;
