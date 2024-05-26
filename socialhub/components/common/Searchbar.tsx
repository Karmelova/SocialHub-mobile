import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';


function Searchbar() {
    
    return (
        <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderRadius: 8,
          marginHorizontal: 10,
          padding: 8,
        }}
      >
        <Text>Search Bar</Text>
      </View>
    );
  }
  
  export default Searchbar;