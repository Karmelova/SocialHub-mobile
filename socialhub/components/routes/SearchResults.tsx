import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useGetUsers } from "../../api/users/useGetUsers";
import { useGetPhoto } from "../../api/photos/UserGetPhoto";
import { useGetAlbumById } from "../../api/albums/useGetAlbumById";

const SearchResults = () => {
  const [searchText, setSearchText] = useState("");
  const [matchingUsers, setMatchingUsers] = useState([]);
  const [matchingPhoto, setMatchingPhoto] = useState(null);
  const [matchingAlbum, setMatchingAlbum] = useState(null);
  const inputRef = useRef(null); // Create a ref for the TextInput

  const userSearch = useGetUsers();
  const photoSearch = useGetPhoto(searchText);
  const albumSearch = useGetAlbumById(searchText);

  // Focus on the input field after rendering
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (userSearch) {
      const filteredUsers = userSearch.filter((user) =>
        user.name.toLowerCase().startsWith(searchText.toLowerCase())
      );
      setMatchingUsers(filteredUsers);
    }
  }, [searchText, userSearch]);

  useEffect(() => {
    if (photoSearch) {
      setMatchingPhoto(photoSearch.id);
    } else {
      setMatchingPhoto(null);
    }
  }, [searchText, photoSearch]);

  useEffect(() => {
    if (albumSearch) {
      setMatchingAlbum(albumSearch.id);
    } else {
      setMatchingAlbum(null);
    }
  }, [searchText, albumSearch]);

  return (
    <View>
      <View style={{height:60, backgroundColor:"#211338", display:"flex", alignContent:"center", justifyContent:"center"}}>
        <View
          style={{
            display: "flex",
            backgroundColor: 'white',
            borderRadius: 8,
            marginHorizontal: 10,
            padding: 3,
            height:30
          }}
        >
          <TextInput
            placeholder="Search..."
            onChangeText={setSearchText}
            value={searchText}
            ref={inputRef} // Assign the ref to the TextInput
          />
        </View>
      </View>

      <View>
        {searchText.length > 0 && (
          <View>
            {matchingUsers.map((matchingUser) => (
              <TouchableOpacity
                key={matchingUser.id}
                onPress={() => console.log(matchingUser.id)}
              >
                <Text>{matchingUser.name}</Text>
              </TouchableOpacity>
            ))}
            {matchingPhoto !== null && (
              <TouchableOpacity
                onPress={() =>
                  console.log(`Photo ID: ${matchingPhoto.toString()}`)
                }
              >
                <Text>{photoSearch.title}</Text>
              </TouchableOpacity>
            )}
            {matchingAlbum !== null && (
              <TouchableOpacity
                onPress={() =>
                  console.log(`Album ID: ${matchingAlbum.toString()}`)
                }
              >
                <Text>{albumSearch.title}</Text>
              </TouchableOpacity>
            )}
            {matchingAlbum === null &&
              matchingPhoto === null &&
              matchingUsers.length === 0 && (
                <Text>No results found for {searchText}</Text>
              )}
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchResults;
