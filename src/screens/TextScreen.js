import React, {useReducer} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import layoutStyles from '../../assets/styles';

const reducer = (state, action) => {
  switch (action.type) {
    case 'update_password':
      return {...state, password: action.payload};
    default:
      return state;
  }
};
const TextScreen = () => {
  const [state, dispatch] = useReducer(reducer, {password: ''});
  const {password} = state;
  return (
    <View style={layoutStyles.sectionContainer}>
      <Text>Enter password</Text>
      <TextInput
        style={localStyles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text =>
          dispatch({type: 'update_password', payload: text})
        }
        value={password}
        secureTextEntry={true}
      />
      {password.length < 6 ? (
        <Text>Password must be longer than 5 characters.</Text>
      ) : null}
    </View>
  );
};

const localStyles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
  },
});

export default TextScreen;
