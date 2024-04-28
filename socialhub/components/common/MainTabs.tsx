import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Screens
import Home from "../routes/Home";
import Posts from "../routes/Posts";
import Albums from "../routes/Albums";
import Users from "../routes/Users";

const Tab = createMaterialBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#d62246"
    inactiveColor="#fff"
    barStyle={{ backgroundColor: "#211338" }}
    shifting={true}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26}/>
        ),
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
      }}
    />
  </Tab.Navigator>
);

export default MainTabs;
