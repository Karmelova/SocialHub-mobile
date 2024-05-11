import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

// Screens
import Home from "../routes/Home";
import Posts from "../routes/Posts";
import Albums from "../routes/Albums";
import Users from "../routes/Users";
import Register from "../routes/Register";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      
      screenOptions={{
        tabBarStyle: { height: 60},
        
      }}
      //@ts-ignore
      tabBarOptions={{
        labelStyle: {
          fontSize: 16, // Rozmiar czcionki etykiet
          fontWeight: "bold", // Pogrubienie czcionki etykiet
          paddingBottom: 8, // Dodatkowy odstęp od dolnej krawędzi
        },
        // Możesz dodać więcej opcji stylizacji paska dolnego tutaj
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: '#d62246',
          tabBarInactiveTintColor: 'lightgray',
          tabBarInactiveBackgroundColor:'#211338',
          tabBarActiveBackgroundColor:'#211338',
          
        }}
        
      />
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarLabel: "Posts",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dots-grid" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: '#d62246',
          tabBarInactiveTintColor: 'lightgray',
          tabBarInactiveBackgroundColor:'#211338',
          tabBarActiveBackgroundColor:'#211338'
        }}
      />
      <Tab.Screen
        name="Albums"
        component={Albums}
        options={{
          tabBarLabel: "Albums",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="image" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: '#d62246',
          tabBarInactiveTintColor: 'lightgray',
          tabBarInactiveBackgroundColor:'#211338',
          tabBarActiveBackgroundColor:'#211338'
        }}
      />
      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarLabel: "Users",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: '#d62246',
          tabBarInactiveTintColor: 'lightgray',
          tabBarInactiveBackgroundColor:'#211338',
          tabBarActiveBackgroundColor:'#211338'
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
