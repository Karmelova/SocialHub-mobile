import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useGetPhotosByAlbumId } from "../../api/photos/useGetPhotosByAlbumId";
import { useGetUser } from "../../api/users/useGetUser";
import { useGetAlbumById } from "../../api/albums/useGetAlbumById";
import Card from "../common/Card";

export default function AlbumPhotos({ route }) {
  const { id } = route.params;
  const photos = useGetPhotosByAlbumId(id || "");
  const albumId = photos && photos.length > 0 ? photos[0].albumId : "";
  const album = useGetAlbumById(String(albumId));
  const userId = album ? album.userId : "";
  const user = useGetUser(String(userId));

  if (!photos) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color="secondary" />
      </View>
    );
  }

  if (photos[0]) {
    return (
      <View style={styles.container}>
        {photos.map((photo) => (
          <Card
            type="photo"
            id={photo.id}
            title={photo.title}
            userId={album?.userId.toString()}
            name={user?.name}
            userName={user?.username}
            description=""
            image={photo.url}
          />
        ))}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>This album does not contain any photos yet</Text>
      </View>
    );
  }
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
});
