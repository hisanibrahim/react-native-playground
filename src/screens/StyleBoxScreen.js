import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {layoutStyles} from '../../assets/styles/layoutStyles';
const StyleBoxScreen = () => {
  return (
    <View style={localStyles.parent}>
      <View style={localStyles.child1}></View>
      <View style={localStyles.child2}></View>
      <View style={localStyles.child3}></View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  parent: {flexDirection: 'row', justifyContent: 'space-between', height: 200},
  child1: {
    height: 100,
    width: 120,
    backgroundColor: 'orange',
    borderColor: 'black',
    borderWidth: 2,
  },
  child2: {
    height: 100,
    width: 120,
    backgroundColor: 'skyblue',
    borderColor: 'black',
    borderWidth: 2,
    alignSelf: 'flex-end',
  },
  child3: {
    height: 100,
    width: 120,
    backgroundColor: 'lightgreen',
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default StyleBoxScreen;
