import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import StringAvatar from "./StringAvatar";
import { Avatar, Button } from "react-native-elements";

const NavbarTop = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#211338",
      }}
    >
      
      {/* LOGO */}
      <MaterialCommunityIcons
        name="state-machine"
        color={"#d62246"}
        size={40}
      />

      {/* Search Bar */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderRadius: 8,
          marginHorizontal: 10,
          padding: 8
        }}
      >
        {/* Tutaj implementuj swój pasek wyszukiwania */}
        <Text>Search Bar</Text>
      </View>

      {/* User Button (Login/Avatar) */}
      {/* <TouchableOpacity
        onPress={() => console.log("Button pressed")}
        style={{ backgroundColor: "#d62246", padding: 8, borderRadius: 8 }}
      >
        <Text style={{ color: "white" }}>LOGIN</Text>
      </TouchableOpacity> */}
      <Avatar
      rounded
  size="small"
  title="BP"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{}}

  overlayContainerStyle={{backgroundColor: '#d62246'}}
/>
      {/* <StringAvatar /> */}
    </View>
  );
};

export default NavbarTop;
