import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import layoutStyles from '../../assets/styles';

const AdjustColor = ({title, incrementColor, decrementColor}) => {
  // recieving incrementColor(), decrementColor() as call back function from parent and call when onPress */}
  return (
    <View>
      <Text>{title}</Text>
      <TouchableOpacity
        onPress={() => incrementColor()}
        style={{
          backgroundColor: '#f3f3f3',
          width: 100,
          margin: 10,
          padding: 5,
        }}>
        <Text style={{textAlign: 'center'}}>More {title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => decrementColor()}
        style={{
          backgroundColor: '#f3f3f3',
          width: 100,
          margin: 10,
          padding: 5,
        }}>
        <Text style={{textAlign: 'center'}}>Less {title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdjustColor;
