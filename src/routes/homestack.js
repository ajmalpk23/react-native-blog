import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home'
import POstDetail from '../screens/PostDetail'


const stack = createStackNavigator();
export default HomeStack = () => {
  return (
    <stack.Navigator initialRouteName='Home' headerMode={false}>
      <stack.Screen name='Home' component={Home} />
      <stack.Screen name='POstDetail' component={POstDetail} />
   
   
      

    </stack.Navigator>
  );
};
