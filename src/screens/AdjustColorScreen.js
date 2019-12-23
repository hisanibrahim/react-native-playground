import React, {useState} from 'react';
import {View, Text, styleSheet, TouchableOpacity, FlatList} from 'react-native';
import layoutStyles from '../../assets/styles';
import AdjustColor from './../components/AdjustColor';
const AdjustColorScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const INCREMENT_COLOR = 15;

  const setColor = (color, increment) => {
    switch (color) {
      case 'red':
        red + increment > 255 || red + increment < 0
          ? null
          : setRed(red + increment);
        return;
      case 'green':
        green + increment > 255 || green + increment < 0
          ? null
          : setGreen(green + increment);
        return;
      case 'blue':
        blue + increment > 255 || blue + increment < 0
          ? null
          : setBlue(blue + increment);
        return;
    }
    return;
  };

  return (
    <View style={layoutStyles.sectionContainer}>
      <AdjustColor
        title="Red"
        incrementColor={() => setColor('red', INCREMENT_COLOR)}
        decrementColor={() => setColor('red', -1 * INCREMENT_COLOR)}
      />
      <AdjustColor
        title="Green"
        incrementColor={() => setColor('green', INCREMENT_COLOR)}
        decrementColor={() => setColor('green', -1 * INCREMENT_COLOR)}
      />
      <AdjustColor
        title="Blue"
        incrementColor={() => setColor('blue', INCREMENT_COLOR)}
        decrementColor={() => setColor('blue', -1 * INCREMENT_COLOR)}
      />
      <View
        style={{
          height: 100,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}></View>
    </View>
  );
};

export default AdjustColorScreen;
