import React, {useReducer} from 'react';
import {View, Text, styleSheet, TouchableOpacity, FlatList} from 'react-native';
import layoutStyles from '../../assets/styles';
import AdjustColor from './../components/AdjustColor';

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {...state, red: state.red + action.amount};
    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : {...state, green: state.green + action.amount};
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {...state, blue: state.blue + action.amount};
    default:
      return state;
  }
};

const INCREMENT_COLOR = 15;
const AdjustColorScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;
  return (
    <View style={layoutStyles.sectionContainer}>
      <AdjustColor
        title="Red"
        incrementColor={() =>
          dispatch({colorToChange: 'red', amount: INCREMENT_COLOR})
        }
        decrementColor={() =>
          dispatch({colorToChange: 'red', amount: -1 * INCREMENT_COLOR})
        }
      />
      <AdjustColor
        title="Green"
        incrementColor={() => {
          dispatch({colorToChange: 'green', amount: INCREMENT_COLOR});
        }}
        decrementColor={() => {
          dispatch({colorToChange: 'green', amount: -1 * INCREMENT_COLOR});
        }}
      />
      <AdjustColor
        title="Blue"
        incrementColor={() =>
          dispatch({colorToChange: 'blue', amount: INCREMENT_COLOR})
        }
        decrementColor={() =>
          dispatch({colorToChange: 'blue', amount: -1 * INCREMENT_COLOR})
        }
      />
      <View
        style={{
          height: 100,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}></View>
      <Text>{`rgb(${red},${green},${blue})`}</Text>
    </View>
  );
};

export default AdjustColorScreen;
