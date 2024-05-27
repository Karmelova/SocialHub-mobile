// Searchbar.js
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Searchbar = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    //@ts-expect-error
    navigation.navigate("SearchResults", { searchText });
    if (searchText.trim() !== "") {
      Keyboard.dismiss(); // Dismiss keyboard after navigation
    }
  };

  return (
    <View
    style={{
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 8,
      marginHorizontal: 10,
      padding: 3,
    }}
    >
      <TextInput
        placeholder="Search..."
        onPress={handleSearch}
        value={searchText}
      />
    </View>
  );
};

export default Searchbar;
