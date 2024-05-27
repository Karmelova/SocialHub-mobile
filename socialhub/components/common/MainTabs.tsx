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
import LoginForm from "../routes/LoginForm";
import UserProfile from "../routes/UserProfile";
import PostDetails from "../routes/PostDetails";
import AlbumPhotos from "../routes/AlbumPhotos";
import SearchResults from "../routes/SearchResults";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={{
        tabBarStyle: { height: 60 },
      }}
      //@ts-ignore
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          paddingBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "HOME",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: "#d62246",
          tabBarInactiveTintColor: "lightgray",
          tabBarInactiveBackgroundColor: "#211338",
          tabBarActiveBackgroundColor: "#211338",
        }}
      />
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarLabel: "POSTS",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dots-grid" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: "#d62246",
          tabBarInactiveTintColor: "lightgray",
          tabBarInactiveBackgroundColor: "#211338",
          tabBarActiveBackgroundColor: "#211338",
        }}
      />
      <Tab.Screen
        name="Albums"
        component={Albums}
        options={{
          tabBarLabel: "ALBUMS",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="image" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: "#d62246",
          tabBarInactiveTintColor: "lightgray",
          tabBarInactiveBackgroundColor: "#211338",
          tabBarActiveBackgroundColor: "#211338",
        }}
      />
      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarLabel: "USERS",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: "#d62246",
          tabBarInactiveTintColor: "lightgray",
          tabBarInactiveBackgroundColor: "#211338",
          tabBarActiveBackgroundColor: "#211338",
        }}
      />
      <Tab.Screen
        name="LoginForm"
        component={LoginForm}
        options={{
          tabBarLabel: "LoginForm",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: "#d62246",
          tabBarInactiveTintColor: "lightgray",
          tabBarInactiveBackgroundColor: "#211338",
          tabBarActiveBackgroundColor: "#211338",
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarLabel: "UserProfile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: "#d62246",
          tabBarInactiveTintColor: "lightgray",
          tabBarInactiveBackgroundColor: "#211338",
          tabBarActiveBackgroundColor: "#211338",
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="PostDetails"
        component={PostDetails}
        options={{
          tabBarLabel: "PostDetails",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: "#d62246",
          tabBarInactiveTintColor: "lightgray",
          tabBarInactiveBackgroundColor: "#211338",
          tabBarActiveBackgroundColor: "#211338",
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="AlbumPhotos"
        component={AlbumPhotos}
        options={{
          tabBarLabel: "AlbumPhotos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: "#d62246",
          tabBarInactiveTintColor: "lightgray",
          tabBarInactiveBackgroundColor: "#211338",
          tabBarActiveBackgroundColor: "#211338",
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="SearchResults"
        component={SearchResults}
        options={{
          tabBarLabel: "SearchResults",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: "#d62246",
          tabBarInactiveTintColor: "lightgray",
          tabBarInactiveBackgroundColor: "#211338",
          tabBarActiveBackgroundColor: "#211338",
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
