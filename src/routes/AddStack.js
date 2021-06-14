import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AddPost from '../screens/Logger'



const ADD = createStackNavigator();
export default AddStack = () => {
  return (
    <ADD.Navigator initialRouteName='AddPost' headerMode={false}>
      <ADD.Screen name='AddPost' component={AddPost} />
     
   
   
      

    </ADD.Navigator>
  );
};
