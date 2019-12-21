import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../../assets/styles';

const HomeButton = ({title, navigate}) => {
  // recieving navigate() as call back function from parent and call when onPress */}
  return (
    <View>
      <TouchableOpacity onPress={() => navigate()}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeButton;
