// Navigation
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";

import NavbarTop from "./common/NavbarTop";
import MainTabs from "./common/MainTabs";
import { StatusBar } from "react-native";
import Login from "./routes/LoginForm";

const Stack = createStackNavigator();
const NestedStack = createStackNavigator();
export type ScreenNames = ["Login", "Auth"]; // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const AppNavigator = () => (
  <NavigationContainer>
    <StatusBar />
    
    <Stack.Navigator>
      <Stack.Screen
        name="Navigation"
        component={MainTabs}
        options={{ header: () => "" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
