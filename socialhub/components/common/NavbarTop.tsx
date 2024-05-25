import React from "react";
import { View, Text} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Account from "./Account";

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
          padding: 8,
        }}
      >
        {/* Tutaj implementuj swój pasek wyszukiwania */}
        <Text>Search Bar</Text>
      </View>
        <Account />
    </View>
  );
};

export default NavbarTop;
