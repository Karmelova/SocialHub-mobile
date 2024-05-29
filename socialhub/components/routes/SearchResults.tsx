import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useGetUsers } from "../../api/users/useGetUsers";
import { useGetPhoto } from "../../api/photos/UseGetPhoto";
import { useGetAlbumById } from "../../api/albums/useGetAlbumById";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchResults = () => {
  const [searchText, setSearchText] = useState("");
  const [matchingUsers, setMatchingUsers] = useState([]);
  const [matchingPhoto, setMatchingPhoto] = useState(null);
  const [matchingAlbum, setMatchingAlbum] = useState(null);
  const inputRef = useRef(null); // Create a ref for the TextInput
  const navigation = useNavigation();

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

  const navigateToPhoto = () => {
    const id = matchingPhoto.toString();
    console.log(id);
    //@ts-expect-error
    navigation.navigate("PhotoDetails", { id });
  };

  const navigateToAlbumPhotos = () => {
    const id = matchingAlbum.toString();
    console.log(id);
    //@ts-expect-error
    navigation.navigate("AlbumPhotos", { id });
  };

  const navigateToUserProfile = (userId) => {
    //@ts-expect-error
    navigation.navigate("UserProfile", { userId });
  };

  return (
    <View>
      <View
        style={{
          height: 60,
          backgroundColor: "#211338",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            backgroundColor: "white",
            borderRadius: 8,
            marginHorizontal: 10,
            padding: 3,
            height: 30,
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

      <View style={styles.resultContainer}>
        {searchText.length > 0 && (
          <View>
            {matchingUsers.map((matchingUser) => (
              <TouchableOpacity
                style={styles.result}
                onPress={() => navigateToUserProfile(matchingUser.id)}
              >
                <MaterialCommunityIcons
                  name="account"
                  color="black"
                  size={26}
                />
                <Text style={styles.resultText}>{matchingUser.name}</Text>
              </TouchableOpacity>
            ))}
            {matchingPhoto != null && (
              <TouchableOpacity style={styles.result} onPress={() => navigateToPhoto()}>
                <MaterialCommunityIcons
                  name="image"
                  color="black"
                  size={26}
                />
                <Text style={styles.resultText}>{photoSearch.title}</Text>
              </TouchableOpacity>
            )}
            {matchingAlbum != null && (
              <TouchableOpacity style={styles.result} onPress={() => navigateToAlbumPhotos()}>
                <MaterialCommunityIcons
                  name="image"
                  color="black"
                  size={26}
                />
                <Text style={styles.resultText}>{albumSearch.title}</Text>
              </TouchableOpacity>
            )}
            {matchingAlbum == null &&
              matchingPhoto == null &&
              matchingUsers.length === 0 && (
                <Text style={styles.resultText}>No results found for {searchText}</Text>
              )}
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  resultContainer: {},
  result: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor:"black",
    borderBottomWidth: 1,
  },
  resultText: {
    fontSize: 20,
    marginLeft:5
  },
});
