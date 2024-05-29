import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import Card from "../common/Card";
import { useGetUserAlbums } from "../../api/users/useGetUserAlbums";

function UserAlbums({ userId, userName, name }) {
  const albums = useGetUserAlbums(userId);

  if (!albums) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.albumsContainer}>
        {albums.map((album) => (
          <Card
            key={album.id}
            type="album"
            id={album.id}
            title={album.title}
            userId={userId}
            userName={userName}
            name={name}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  albumsContainer: {
    marginBottom: 70,
  },
});

export default UserAlbums;
