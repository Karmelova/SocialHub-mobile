import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const NavbarTop = ({ navigation }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10, backgroundColor: "lightgrey" }}>
      {/* Logo */}
      <Text>Logo</Text>
      
      {/* Search Bar */}
      <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 8, paddingHorizontal: 10, marginHorizontal: 10 }}>
        {/* Tutaj implementuj swój pasek wyszukiwania */}
        <Text>Search Bar</Text>
      </View>
      
      {/* User Button (Login/Avatar) */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <MaterialCommunityIcons name="account" size={26} />
      </TouchableOpacity>
    </View>
  );
};

export default NavbarTop;
