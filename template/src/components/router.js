import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "@appComponents/login";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: '#191A22',
  },
};

const Stack = createStackNavigator();

const AppRouter = ({user}) => {
  return (
    <NavigationContainer theme={MyTheme} headerMode="none">
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = ({user}) => {
  return {
    user: user,
  };
};

export default connect(mapStateToProps)(AppRouter);
