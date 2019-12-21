import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../../assets/styles';

const HomeButton = props => {
  return (
    <View>
      <TouchableOpacity
      // onPress={() => props.go()}
      >
        <Text style={[styles.sectionTitle, {color: '#f3f3f3'}]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeButton;
