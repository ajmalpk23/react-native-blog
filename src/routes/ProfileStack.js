import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/Menu'



const stack = createStackNavigator();
export default HomeStack = () => {
  return (
    <stack.Navigator initialRouteName='Profile' headerMode={false}>
      <stack.Screen name='Profile' component={Profile} />
     
   
   
      

    </stack.Navigator>
  );
};
