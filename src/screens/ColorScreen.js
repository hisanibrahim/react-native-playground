import React, {useState} from 'react';
import {View, Text, styleSheet, TouchableOpacity, FlatList} from 'react-native';
import layoutStyles from '../../assets/styles';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View style={layoutStyles.sectionContainer}>
      <TouchableOpacity
        onPress={() => {
          setColors([...colors, generateRandomColor()]);
        }}>
        <Text style={{fontSize: 18}}>Add a color</Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                padding: 10,
                backgroundColor: item,
              }}></View>
          );
        }}></FlatList>
    </View>
  );
};

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};
export default ColorScreen;
