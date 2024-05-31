import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useGetPhotosByAlbumId } from "../../api/photos/useGetPhotosByAlbumId";
import { useGetUser } from "../../api/users/useGetUser";
import { useGetAlbumById } from "../../api/albums/useGetAlbumById";
import Card from "../common/Card";
import NavbarTop from "../common/NavbarTop";
import { useGetPhoto } from "../../api/photos/UseGetPhoto";

export default function PhotoDetails({ route }) {
  const { id } = route.params;
  const photoId = id ? String(id) : "";
  const photo = useGetPhoto(id.toString())
  const albumId = photo ? photo.albumId : null;
  const album = useGetAlbumById(albumId ? String(albumId) : "");
  const userId = album ? album.userId : null;
  const user = useGetUser(userId ? String(userId) : "");

  if (!photo) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color="secondary" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavbarTop />
      <View>
        <Card
          type="photo"
          id={photo.id}
          title={photo.title}
          userId={album?.userId?.toString() || ""}
          name={user?.name || ""}
          userName={user?.username || ""}
          description=""
          image={photo.url}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
});
