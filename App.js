/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';


import ScreenDataFilter from "./src/components/organismos/ScreenDataFilter";
import ScreenData from './src/components/organismos/ScreenData';
import ScreenLogin from './src/components/organismos/ScreenLogin';

import store from './src/redux/store';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();




const App = () => {
  return (
    <Provider store={store}>

      <NavigationContainer>

        <Stack.Navigator headerMode="none" initialRouteName="Login">

          

          <Stack.Screen name="Login" component={ScreenLogin} />
          <Stack.Screen name="Data" component={ScreenData} />
          <Stack.Screen name="FilterData" component={ScreenDataFilter} />

        </Stack.Navigator>


      </NavigationContainer>

    </Provider>
  );
};


export default App;