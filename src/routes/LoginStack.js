import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/splash'
import Login  from '../screens/Login';
import Signup from '../screens/singup'
import Bottom from './boottomtabbarnav'



const stack = createStackNavigator();
export default LoginStack = () => {
  return (
    <stack.Navigator initialRouteName='Splash' headerMode={false}>
      <stack.Screen name='Splash' component={Splash} />
      <stack.Screen name='Login' component={Login} />
      <stack.Screen name='Signup' component={Signup} />
      <stack.Screen name='Bottom' component={Bottom} />
     
   
   
      

    </stack.Navigator>
  );
};
