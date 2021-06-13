import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home'


const stack = createStackNavigator();
export default HomeStack = () => {
  return (
    <stack.Navigator initialRouteName='Home' headerMode={false}>
      <stack.Screen name='Home' component={Home} />
   
   
      

    </stack.Navigator>
  );
};
