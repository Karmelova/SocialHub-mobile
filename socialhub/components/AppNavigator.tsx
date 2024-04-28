// Navigation
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import NavbarTop from "./common/NavbarTop";
import MainTabs  from "./common/MainTabs";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <StatusBar style="light" />
    <Stack.Navigator>
      <Stack.Screen
        name="Navigation"
        component={MainTabs}
        options={{ header: () => <NavbarTop /> }}
        
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;