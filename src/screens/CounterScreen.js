import React, {useReducer} from 'react';
import {View, Text, Button} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, counter: state.counter + action.payload};
    case 'decrement':
      return {...state, counter: state.counter - action.payload};
    default:
      return state;
  }
  // action.type === "increment" ? return state.counter + 1 : return state.counter -1
};
const ADJUST_BY = 5;

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  const {counter} = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({type: 'increment', payload: ADJUST_BY})}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({type: 'decrement', payload: ADJUST_BY})}
      />
      <Text>Counter : {counter}</Text>
    </View>
  );
};

export default CounterScreen;
