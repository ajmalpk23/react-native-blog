import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Serach from '../screens/Documents'



const ADD = createStackNavigator();
export default AddStack = () => {
  return (
    <ADD.Navigator initialRouteName='Serach' headerMode={false}>
      <ADD.Screen name='Serach' component={Serach} />
     
   
   
      

    </ADD.Navigator>
  );
};
