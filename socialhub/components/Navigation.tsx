// Navigation
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import NavbarTop from "./common/NavbarTop";
import MainTabs  from "./common/MainTabs";

// Imports


import { Image, Text, TouchableOpacity, View } from "react-native";

// Logo
const Logo = () => <Text>ara ara</Text>;

// Pasek wyszukiwania
// const SearchBar = () => (
//   <View style={{ flex: 1, backgroundColor: 'lightgrey', borderRadius: 8, paddingHorizontal: 10 }}>
//     {/* Tutaj implementuj swój pasek wyszukiwania */}
//   </View>
// );

// // Przycisk użytkownika
// const UserButton = ({ onPress }: { onPress: () => void }) => (
//   <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
//     {/* Tutaj implementuj swój przycisk użytkownika */}
//   </TouchableOpacity>
// );

// Główny stos nawigacyjny

// Stos zakładek
const Stack = createStackNavigator();

// Stos zakładek




const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ header: () => <NavbarTop navigation={undefined} /> }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;