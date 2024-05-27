import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Text } from 'react-native-elements';

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    // Update the searchQuery state as the user types
    setSearchQuery(text);

    // Perform search operations based on the updated searchQuery
    console.log('Search Query:', text);
    // You can implement your search logic here, such as filtering data or making API calls
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
        onChangeText={handleSearch} // Call handleSearch whenever the text changes
        value={searchQuery}
        placeholder="Search..."
      />
    </View>
  );
}

export default Searchbar;
